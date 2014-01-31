.. _Face:

Face Class
==========

:[C++]:
    Namespace: ``ndn``

:[Python]:
    Module: ``pyndn``

Face Constructors
-----------------

Face Constructor (explicit Transport)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Create a new Face object with the given Transport to manage NDN communication.

:[C++]:

    .. code-block:: c++
    
        Face(
        
            const ptr_lib::shared_ptr<Transport>& transport
            const ptr_lib::shared_ptr<const Transport::ConnectionInfo>& 
                connectionInfo
        
        );

:[JavaScript]:

    .. code-block:: javascript
    
        var Face = function Face(
        
            [settings // associative array]
        
        )

:[Python]:

    .. code-block:: python
    
        def __init__(self)

:Parameters:

    - ``transport``
	An object of a subclass of Transport to use for communication.

    - ``connectionInfo``
	This must be a ConnectionInfo from the same subclass of Transport as transport.

    - ``settings``
	(JavaScript only) An associative array with the following defaults:

	.. code-block:: javascript

            getTransport: function() 
                { return new WebSocketTransport(); },
            getHostAndPort: transport.defaultGetHostAndPort,
                 // a function, on each call it returns 
                 // a new { host: host, port: port } 
                 // or null if there are no more hosts.
            host: null, // If null, use getHostAndPort when connecting.
            port: 9696

Face Constructor (default Transport)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Create a new Face object with optional settings to manage NDN communication.

:[C++]:

    .. code-block:: c++
    
        Face(
        
            [const char* host]
            [, unsigned short port]
        
        );

:[JavaScript]:

    .. code-block:: javascript
    
        var Face = function Face(
        
            [settings // associative array]
        
        )

:[Python]:

    .. code-block:: python
    
        def __init__(self)

:Parameters:

    - ``host``
	(optional) The host to connect to. If omitted, use “localhost” with the default TcpTransport.

    - ``port``
	(optional) The port to connect to. If omitted, use 6363 with the default TcpTransport.

    - ``settings``
	(JavaScript only) (optional) An associative array with the following defaults:

	.. code-block:: javascript

            getTransport: function() 
                { return new WebSocketTransport(); },
            getHostAndPort: transport.defaultGetHostAndPort,
                // a function, on each call it returns a new 
                // { host: host, port: port } 
                // or null if there are no more hosts.
            host: null, // If null, use getHostAndPort when connecting.
            port: 9696

Face.expressInterest Methods
----------------------------

Face.expressInterest Method (from Interest)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Send the interest through the transport, read the entire response and call onData. If the interest times out according to interest lifetime, call onTimeout (if not omitted).

C++ only: Your application must call processEvents.

:[C++]:

    .. code-block:: c++
    
        unsigned int expressInterest(
        
            const Interest& interest,
            const OnData& onData,
            [, const OnTimeout& onTimeout]
        
        );

:[JavaScript]:

    .. code-block:: javascript
    
        Face.prototype.expressInterest = function(
        
            interest     // Interest
            onData,      // function
            [, onTimeout // function]
        
        )

:Parameters:

    - ``interest``
	The Interest to send which includes the interest lifetime for the timeout.

    - ``onData``
	When a matching data packet is received, this calls ``onData(interest, data)`` where:

	    - ``interest`` is the interest given to expressInterest.
	    - ``data`` is the received Data object.

    - ``onTimeout``
	(optional) If the interest times out according to the interest lifetime, this calls ``onTimeout(interest)`` where:

	    - ``interest`` is the interest given to expressInterest.

:Returns:

    The pending interest ID which can be used with removePendingInterest.

Face.expressInterest Method (from Name)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Encode name as an Interest, using the interestTemplate if supplied, send the interest through the transport, read the entire response and call onData. If the interest times out according to interest lifetime, call onTimeout (if not omitted).
C++ only: Your application must call processEvents.

:[C++]:

    .. code-block:: c++
    
        unsigned int expressInterest(
        
            const Name& name,
            [, const Interest* interestTemplate]
            const OnData& onData,
            [, const OnTimeout& onTimeout]
        
        );

:[JavaScript]:

    .. code-block:: javascript
    
        Face.prototype.expressInterest = function(
        
            name,               // Name
            [, interestTemplate // Interest]
            onData,             // function
            [, onTimeout        // function]
        
        )

:[Python]:

    .. code-block:: python
    
        def expressInterest(self,
        
            name                # Name
            closure             # Closure
            [, interestTemplate # Interest]
        
        )

:Parameters:

    - ``name``
	The Name for the interest.

    - ``interestTemplate``
	(optional) If not omitted, copy the interest selectors from this Interest. If omitted, use a default interest lifetime.

    - ``onData``
	When a matching data packet is received, this calls ``onData(interest, data)`` where:

	    - ``interest`` is the interest given to expressInterest.
	    - ``data`` is the received Data object.

    - ``onTimeout``
	(optional) If the interest times out according to the interest lifetime, this calls ``onTimeout(interest)`` where:

	    - ``interest`` is the interest given to expressInterest.

:Returns:

    The pending interest ID which can be used with removePendingInterest.

Face.removePendingInterest Method
---------------------------------

Remove the pending interest entry with the pendingInterestId from the pending interest table. This does not affect another pending interest with a different pendingInterestId, even it if has the same interest name. If there is no entry with the pendingInterestId, do nothing.

:[C++]:

    .. code-block:: c++
    
        void removePendingInterest(
        
            unsigned int pendingInterestId
        
        );

:Parameters:

    - ``pendingInterestId``
	The ID returned from expressInterest.

.. _registerPrefix:

Face.registerPrefix Method
--------------------------

Request NDN network to forward Interests for the specified :ref:`name prefix <Name>` towards the face.

.. note::

    The current API is limited to registering the specified prefix only on a direclty connected NDN hub (e.g., local NDN daemon).

.. note::

    **C++ only**: Your application must call :ref:`processEvents`.

:[C++]:

    .. code-block:: c++

        void registerPrefix(
        
            const Name &prefix,
            const OnRegisterSucceed &onRegisterSucceed,
            const onRegisterFailed &onRegisterFailed
            [, ForwardingFlags flags]
        )

:[JavaScript]:

    .. code-block:: javascript
    
        Face.prototype.registerPrefix = function(
        
            prefix,            // Name
            OnRegisterSucceed, // function
            onRegisterFailed   // function
            [, flags]          // ForwardingFlags
        
        )

:[Python]:

    .. code-block:: python
    
        def registerPrefix(self,
        
            prefix,             # Name
            OnRegisterSucceed,  # function
            OnRegisterFailed    # function
            [, flags]           # ForwardingFlags
        )

:Parameters:

    - ``prefix``
	The :ref:`Name prefix <Name>` to register in NDN network.

    - ``onRegisterSucceed``
	Callback that is fired when the prefix is successfully registered within the NDN network.
        The prototype for the callback is ``onRegisterSucceed(prefix)``, where:
            - ``prefix`` is the prefix given to registerPrefix.

    - ``onRegisterFailed``
	If failed to set Interest filter for any reason, this calls ``onRegisterFailed(prefix)`` where:
	    - ``prefix`` is the prefix given to registerPrefix.

    - ``flags``
	(optional) The flags for finer control of how and which Interests should be forwarded towards the face.
        If omitted, use the default flags defined by the default :ref:`ForwardingFlags <ForwardingFlags>` constructor.

.. _deregisterPrefix:

Face.deregisterPrefix Method
----------------------------

Deregister the previously registered :ref:`prefix <Name>` from the NDN network.

.. note::

    The current API is limited to deregistering the specified prefix only on a direclty connected NDN hub (e.g., local NDN daemon).

:[C++]:

    .. code-block:: c++

        void deregisterPrefix(
        
            const Name &prefix
            [, const onDeregisterSucceed &onDeregisterSucceed]
            [, const onDeregisterFailed &onDeregisterFailed]
        )

:[JavaScript]:

    .. code-block:: javascript
    
        Face.prototype.deregisterPrefix = function(
        
            prefix                   // Name
            [, OnDeregisterSucceed]  // function
            [, OnDeregisterFailed]   // function
        
        )

:[Python]:

    .. code-block:: python
    
        def deregisterPrefix(self,
        
            prefix                    # Name
            [, OnDeregisterSucceed]   # function
            [, OnDeregisterFailed]    # function
        )

:Parameters:

    - ``prefix``
	The :ref:`Name prefix <Name>` to deregister in NDN network.

    - ``onDeregisterSucceed``
	(Optional) Callback that is fired when the prefix is successfully deregistered within the NDN network.
        The prototype for the callback is ``onDeregisterSucceed(prefix)``, where:
	    - ``prefix`` is the prefix given to ``deregisterPrefix``.

    - ``onRegisterFailed``
	(Optional) If failed to set Interest filter for any reason, this calls ``onDeregisterFailed(prefix)`` where:
	    - ``prefix`` is the prefix given to ``deregisterPrefix``.

.. _setInterestFilter:

Face.setInterestFilter Method
-----------------------------

Register ``onInterest`` callback when an Interest mathing the :ref:`filter <InterestFilter>` is received on the face.


:[C++]:

    .. code-block:: c++
    
        unsigned int setInterestFilter(
        
            const InterestFilter& filter,
            const OnInterest& onInterest,

        );

:[JavaScript]:

    .. code-block:: javascript
    
        Face.prototype.setInterestFilter = function(
        
            filter,           // InterestFilter
            onInterest        // function
        
        )

:[Python]:

    .. code-block:: python
    
        def setInterestFilter(self,
        
            filter,       # InterestFilter
            onInterest    # function
        
        )

:Parameters:

    - ``filter``
	The :ref:`InterestFilter <InterestFilter>` to match Interests.

    - ``onInterest``
	When an interest is received which matches the name prefix, this calls ``onInterest(face, filter, interest)`` where:

            - ``face`` is the :ref:`Face` on which the Interest is received.
              An application can satisfy this Interest using :ref:`put`
	    - ``filter`` is the filter given to ``setInterestFilter``.
	    - ``interest`` is the received interest.

:Returns:

    The interest filter ID which can be used with :ref:`removeInterestFilter`.

.. _removeInterestFilter:

Face.removeInterestFilter Method
--------------------------------

Remove the previously set Interest filter with the ``interestFilterId`` from the pending interest table.  This does not affect any other interest filters with different IDs, even it if has the same prefix name. If there is no entry with the ``interestFilterId``, do nothing.

:[C++]:

    .. code-block:: c++
    
        void removeInterestFilter(
        
            unsigned int interestFilterId
        
        );

:Parameters:

    - ``interestFilterId``
	The ID returned from :ref:`setInterestFilter`.

.. _processEvents:

Face.processEvents Method
-------------------------

C++ only: Process any data to receive and call data or timeout callbacks.  This is non-blocking and will return immediately if there is no data to receive.  You should repeatedly call this from an event loop, with calls to sleep as needed so that the loop doesn't use 100% of the CPU.  Since processEvents modifies the pending interest table, your application should make sure that it calls processEvents in the same thread as expressInterest (which also modifies the pending interest table).

:[C++]:

    .. code-block:: c++
    
        void processEvents();

:Throw:

    This may throw an exception for reading data or in the callback for processing the data.  If you call this from an main event loop, you may want to catch and log/disregard all exceptions.

