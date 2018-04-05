MemoryContentCache Class
========================

.. container:: experimental

    .. admonition:: Experimental

       The MemoryContentCache is experimental and the API is not finalized.

    A MemoryContentCache holds a set of Data packets and answers an Interest to
    return the correct Data packet. The cache is periodically cleaned up to
    remove each stale Data packet based on its FreshnessPeriod (if it has one).

    :[C++]:
        | ``#include <ndn-cpp/util/memory-content-cache.hpp>``
        | Namespace: ``ndn``

    :[Python]:
        Module: ``pyndn.util.memory_content_cache``

    :[Java]:
        Package: ``net.named_data.jndn.util``

MemoryContentCache Constructor
------------------------------

.. container:: experimental

    .. admonition:: Experimental

       The MemoryContentCache is experimental and the API is not finalized.

    Create a new MemoryContentCache to use the given Face.

    :[C++]:

        .. code-block:: c++

            MemoryContentCache(
                Face* face
                [, Milliseconds cleanupIntervalMilliseconds]
            );

    :[Python]:

        .. code-block:: python

            def __init__(self
                face                            # Face
                [, cleanupIntervalMilliseconds  # double]
            )

    :[JavaScript]:

        .. code-block:: javascript

            var MemoryContentCache = function MemoryContentCache(
                face                            // Face
                [, cleanupIntervalMilliseconds  // number]
            )

    :[Java]:

        .. code-block:: java

            public MemoryContentCache(
                Face face
                [, double cleanupIntervalMilliseconds]
            )

    :Parameters:

        - `face`
            The Face to use to call registerPrefix and setInterestFilter, and
            which will call the onInterest callback.

        - `cleanupIntervalMilliseconds`
            (optional) The interval in milliseconds
            between each check to clean up stale content in the cache. If omitted,
            use a default of 1000 milliseconds. If this is a large number, then
            effectively the stale content will not be removed from the cache.

.. _MemoryContentCache.add:

MemoryContentCache.add Method
-----------------------------

.. container:: experimental

    .. admonition:: Experimental

       The MemoryContentCache is experimental and the API is not finalized.

    Add the Data packet to the cache so that it is available to use to 
    answer interests. If data.getMetaInfo().getFreshnessPeriod() is specified,
    set the staleness time to now plus the maximum of
    data.getMetaInfo().getFreshnessPeriod() and minimumCacheLifetime,
    which is checked during cleanup to remove stale content. This also checks if 
    cleanupIntervalMilliseconds milliseconds have passed and removes stale 
    content from the cache. After removing stale content, remove timed-out
    pending interests from
    :ref:`storePendingInterest <MemoryContentCache.storePendingInterest>`, then
    if the added Data packet satisfies any interest, send it and remove the
    interest from the pending interest table.

    .. note::

        [except JavaScript] Your application must call :ref:`processEvents <processEvents>`.  
        Since processEvents modifies the cache, your application should make sure that it 
        calls processEvents in the same thread as add (which also modifies the cache).

    :[C++]:

        .. code-block:: c++

            void add(
                const Data& data
            );

    :[Python]:

        .. code-block:: python

            def add(self,
                data  # Data
            )

    :[JavaScript]:

        .. code-block:: javascript

            MemoryContentCache.prototype.add = function(
                data  // Data
            )

    :[Java]:

        .. code-block:: java

            public final void add(
                Data data
            )

    :Parameters:

        - `data`
            The Data packet object to put in the cache. This copies the 
            fields from the object.

.. _MemoryContentCache.getMinimumCacheLifetime:

MemoryContentCache.getMinimumCacheLifetime Method
-------------------------------------------------

.. container:: experimental

    .. admonition:: Experimental

       The MemoryContentCache is experimental and the API is not finalized.

    Get the minimum lifetime before removing stale content from the cache.

    :[C++]:

        .. code-block:: c++

            Milliseconds getMinimumCacheLifetime();

    :[Python]:

        .. code-block:: python

            # Returns float
            def getMinimumCacheLifetime(self)

    :[JavaScript]:

        .. code-block:: javascript

            // Returns number
            MemoryContentCache.prototype.getMinimumCacheLifetime = function()

    :[Java]:

        .. code-block:: java

            public final double getMinimumCacheLifetime()

    :Returns:

        The minimum cache lifetime in milliseconds.

.. _MemoryContentCache.getStorePendingInterest:

MemoryContentCache.getStorePendingInterest Method
-------------------------------------------------

.. container:: experimental

    .. admonition:: Experimental

       The MemoryContentCache is experimental and the API is not finalized.


    Return a callback to use for onDataNotFound in registerPrefix which simply calls
    :ref:`storePendingInterest <MemoryContentCache.storePendingInterest>` to store
    the interest that doesn't match a Data packet.
    :ref:`add(data) <MemoryContentCache.add>` will check if the added Data packet
    satisfies any pending interest and send it.

    :[C++]:

        .. code-block:: c++

            const OnInterestCallback& getStorePendingInterest();

    :[Python]:

        .. code-block:: python

            # Returns an onInterest callback
            def getStorePendingInterest(self)

    :[JavaScript]:

        .. code-block:: javascript

            // Returns an onInterest callback
            MemoryContentCache.prototype.getStorePendingInterest = function()

    :[Java]:

        .. code-block:: java

            public final OnInterestCallback getStorePendingInterest()

    :Returns:

        A callback to use for onDataNotFound in
        :ref:`registerPrefix <MemoryContentCache.registerPrefix>` .

.. _MemoryContentCache.registerPrefix:

MemoryContentCache.registerPrefix Method
----------------------------------------

.. container:: experimental

    .. admonition:: Experimental

       The MemoryContentCache is experimental and the API is not finalized.

    Call registerPrefix on the Face given to the constructor so that this
    MemoryContentCache will answer interests whose name has the prefix.
    Alternatively, if the Face's registerPrefix has already been called,
    then you can call :ref:`setInterestFilter <MemoryContentCache.setInterestFilter>`.

    .. note::

        [except JavaScript] Your application must call :ref:`processEvents <processEvents>`.  
        The cache is processed on the same thread that calls processEvents.

    :[C++]:

        .. code-block:: c++

            void registerPrefix(
                const Name& prefix,
                const OnRegisterFailed& onRegisterFailed
                [, const OnRegisterSuccess& onRegisterSuccess]
                [, const OnInterestCallback& onDataNotFound]
                [, const ForwardingFlags& flags]
            );

    :[Python]:

        .. code-block:: python

            def registerPrefix(self,
                prefix,               # Name
                onRegisterFailed      # function object
                [, onRegisterSuccess  # function object]
                [, onDataNotFound     # function object]
                [, flags              # ForwardingFlags]
            )

    :[JavaScript]:

        .. code-block:: javascript

            MemoryContentCache.prototype.registerPrefix = function(
                prefix,               // Name
                onRegisterFailed      // function
                [, onRegisterSuccess  // function]
                [, onDataNotFound     // function]
                [, flags              // ForwardingFlags]
            )

    :[Java]:

        .. code-block:: java

            public final void registerPrefix(
                Name prefix,
                OnRegisterFailed onRegisterFailed
                [, OnRegisterSuccess onRegisterSuccess]
                [, OnInterestCallback onDataNotFound]
                [, ForwardingFlags flags]
            )

    :Parameters:

        - `prefix`
            The Name for the prefix to register. This copies the Name.

        - `onRegisterFailed`
            If failed to set Interest filter for any reason, this calls ``onRegisterFailed(prefix)`` where:

                - ``prefix`` is the prefix given to registerPrefix.

          .. note::

              The library will log any exceptions thrown by this callback, but for better
              error handling the callback should catch and properly handle any exceptions.

        - `onRegisterSuccess`
          (optional) When this receives a success message from the forwarder, this calls ``onRegisterSuccess(prefix, registeredPrefixId)`` where:

          - ``prefix`` is the prefix given to registerPrefix.
          - ``registeredPrefixId`` is the value returned by registerPrefix.

          .. note::

              The library will log any exceptions thrown by this callback, but for better
              error handling the callback should catch and properly handle any exceptions.

        - `onDataNotFound`
            (optional) If a data packet for an interest is not found in the
            cache, this forwards the interest by calling the onDataNotFound
            callback. (For details of the callback parameters, see the
            onInterest parameter of :ref:`registerPrefix <Face.registerPrefix>`.
            The onDataNotFound callback is called on the same thread that calls
            :ref:`processEvents <processEvents>`.) Your callback can find the
            Data packet for the interest and send it. If your callback cannot
            find the Data packet, it can optionally call
            :ref:`storePendingInterest(interest, ...) <MemoryContentCache.storePendingInterest>`
            to store the pending interest in this object to be satisfied by a
            later call to :ref:`add(data) <MemoryContentCache.add>`. If you want
            to automatically store all pending interests, you can simply use
            :ref:`getStorePendingInterest() <MemoryContentCache.getStorePendingInterest>`
            for onDataNotFound. If onDataNotFound is an empty OnInterestCallback()
            (C++) or null (Java, JavaScript) or None (PyNDN), this does not use
            it.

          .. note::

              The library will log any exceptions thrown by this callback, but for better
              error handling the callback should catch and properly handle any exceptions.

        - `flags`
            (optional) The flags for finer control of how and which Interests should be forwarded towards the face.
            If omitted, use the default flags defined by the default :ref:`ForwardingFlags <ForwardingFlags>` constructor.

.. _MemoryContentCache.setInterestFilter:

MemoryContentCache.setInterestFilter Methods
--------------------------------------------

MemoryContentCache.setInterestFilter Method (from InterestFilter)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. container:: experimental

    .. admonition:: Experimental

       The MemoryContentCache is experimental and the API is not finalized.

    Call setInterestFilter on the Face given to the constructor so that this
    MemoryContentCache will answer interests whose name matches the filter.

    .. note::

        [except JavaScript] Your application must call :ref:`processEvents <processEvents>`.
        The cache is processed on the same thread that calls processEvents.

    :[C++]:

        .. code-block:: c++

            void setInterestFilter(
                const InterestFilter& filter,
                [, const OnInterestCallback& onDataNotFound]
            );

    :[Python]:

        .. code-block:: python

            def setInterestFilter(self,
                filter,            # InterestFilter
                [, onDataNotFound  # function object]
            )

    :[JavaScript]:

        .. code-block:: javascript

            MemoryContentCache.prototype.setInterestFilter = function(
                filter,            // InterestFilter
                [, onDataNotFound  // function]
            )

    :[Java]:

        .. code-block:: java

            public final void setInterestFilter(
                InterestFilter filter,
                [, OnInterestCallback onDataNotFound]
            )

    :Parameters:

        - `filter`
            The :ref:`InterestFilter <InterestFilter>` with a prefix and optional
            regex filter used to match the name of an incoming Interest. This makes
            a copy of filter.

        - `onDataNotFound`
            (optional) If a data packet for an interest is not found in the
            cache, this forwards the interest by calling the onDataNotFound
            callback. (For details of the callback parameters, see the
            onInterest parameter of :ref:`registerPrefix <Face.registerPrefix>`.
            The onDataNotFound callback is called on the same thread that calls
            :ref:`processEvents <processEvents>`.) Your callback can find the
            Data packet for the interest and send it. If your callback cannot
            find the Data packet, it can optionally call
            :ref:`storePendingInterest(interest, ...) <MemoryContentCache.storePendingInterest>`
            to store the pending interest in this object to be satisfied by a
            later call to :ref:`add(data) <MemoryContentCache.add>`. If you want
            to automatically store all pending interests, you can simply use
            :ref:`getStorePendingInterest() <MemoryContentCache.getStorePendingInterest>`
            for onDataNotFound. If onDataNotFound is an empty OnInterestCallback()
            (C++) or null (Java, JavaScript) or None (PyNDN), this does not use
            it.

          .. note::

              The library will log any exceptions thrown by this callback, but for better
              error handling the callback should catch and properly handle any exceptions.

MemoryContentCache.setInterestFilter Method (from prefix)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. container:: experimental

    .. admonition:: Experimental

       The MemoryContentCache is experimental and the API is not finalized.

    Call setInterestFilter on the Face given to the constructor so that this
    MemoryContentCache will answer interests whose name name has the prefix.

    .. note::

        [except JavaScript] Your application must call :ref:`processEvents <processEvents>`.
        The cache is processed on the same thread that calls processEvents.

    :[C++]:

        .. code-block:: c++

            void setInterestFilter(
                const Name &prefix,
                [, const OnInterestCallback& onDataNotFound]
            );

    :[Python]:

        .. code-block:: python

            def setInterestFilter(self,
                prefix,            # Name
                [, onDataNotFound  # function object]
            )

    :[JavaScript]:

        .. code-block:: javascript

            MemoryContentCache.prototype.setInterestFilter = function(
                prefix,            // Name
                [, onDataNotFound  // function]
            )

    :[Java]:

        .. code-block:: java

            public final void setInterestFilter(
                Name prefix,
                [, OnInterestCallback onDataNotFound]
            )

    :Parameters:

        - `prefix`
           The :ref:`Name <Name>` prefix used to match the name of an incoming Interest.

        - `onDataNotFound`
            (optional) If a data packet for an interest is not found in the
            cache, this forwards the interest by calling the onDataNotFound
            callback. (For details of the callback parameters, see the
            onInterest parameter of :ref:`registerPrefix <Face.registerPrefix>`.
            The onDataNotFound callback is called on the same thread that calls
            :ref:`processEvents <processEvents>`.) Your callback can find the
            Data packet for the interest and send it. If your callback cannot
            find the Data packet, it can optionally call
            :ref:`storePendingInterest(interest, ...) <MemoryContentCache.storePendingInterest>`
            to store the pending interest in this object to be satisfied by a
            later call to :ref:`add(data) <MemoryContentCache.add>`. If you want
            to automatically store all pending interests, you can simply use
            :ref:`getStorePendingInterest() <MemoryContentCache.getStorePendingInterest>`
            for onDataNotFound. If onDataNotFound is an empty OnInterestCallback()
            (C++) or null (Java, JavaScript) or None (PyNDN), this does not use
            it.

          .. note::

              The library will log any exceptions thrown by this callback, but for better
              error handling the callback should catch and properly handle any exceptions.

.. _MemoryContentCache.setMinimumCacheLifetime:

MemoryContentCache.setMinimumCacheLifetime Method
-------------------------------------------------

.. container:: experimental

    .. admonition:: Experimental

       The MemoryContentCache is experimental and the API is not finalized.

    Set the minimum lifetime before removing stale content from the cache which
    can keep content in the cache longer than the lifetime defined in the meta
    info. This can be useful for matching interests where MustBeFresh is false.
    The default minimum cache lifetime is zero, meaning that content is removed
    when its lifetime expires.

    :[C++]:

        .. code-block:: c++

            void setMinimumCacheLifetime(
                Milliseconds minimumCacheLifetime
            );

    :[Python]:

        .. code-block:: python

            def setMinimumCacheLifetime(self,
                minimumCacheLifetime  # float
            )

    :[JavaScript]:

        .. code-block:: javascript

            MemoryContentCache.prototype.setMinimumCacheLifetime = function(
                minimumCacheLifetime  // number
            )

    :[Java]:

        .. code-block:: java

            public final void setMinimumCacheLifetime(
                double minimumCacheLifetime
            )

    :Parameters:

        - `minimumCacheLifetime`
            The minimum cache lifetime in milliseconds.

.. _MemoryContentCache.storePendingInterest:

MemoryContentCache.storePendingInterest Method
----------------------------------------------

.. container:: experimental

    .. admonition:: Experimental

       The MemoryContentCache is experimental and the API is not finalized.

    Store an interest from an onInterest callback in the internal pending
    interest table (normally because there is no Data packet available yet to
    satisfy the interest). :ref:`add(data) <MemoryContentCache.add>` will check
    if the added Data packet satisfies any pending interest and send it through
    the transport.

    :[C++]:

        .. code-block:: c++

            void storePendingInterest(
                const ptr_lib::shared_ptr<const Interest>& interest,
                Transport& transport
            );

    :[Python]:

        .. code-block:: python

            def storePendingInterest(self,
                interest,  # Interest
                transport  # Transport
            )

    :[JavaScript]:

        .. code-block:: javascript

            MemoryContentCache.prototype.storePendingInterest = function(
                interest.  // Interest
                transport  // Transport
            )

    :[Java]:

        .. code-block:: java

            public final void storePendingInterest(
                Interest interest,
                Face face
            )

    :Parameters:

        - `interest`
            The Interest for which we don't have a Data packet yet. You should
            not modify the interest after calling this.

        - `transport`
            The Transport with the connection which received the interest. This
            comes from the onInterest callback.

MemoryContentCache.unregisterAll Method
---------------------------------------

.. container:: experimental

    .. admonition:: Experimental

       The MemoryContentCache is experimental and the API is not finalized.

    Call Face.unsetInterestFilter and Face.removeRegisteredPrefix for all the
    prefixes given to the setInterestFilter and registerPrefix method on this
    MemoryContentCache object so that it will not receive interests any more.
    You can call this if you want to "shut down" this MemoryContentCache while
    your application is still running.

    .. note::

        [except JavaScript] Your application should call this on the same thread
        that calls processEvents.

    :[C++]:

        .. code-block:: c++

            void unregisterAll();

    :[Python]:

        .. code-block:: python

            def unregisterAll(self)

    :[JavaScript]:

        .. code-block:: javascript

            MemoryContentCache.prototype.unregisterAll = function()

    :[Java]:

        .. code-block:: java

            public final unregisterAll()
