.. _Face:

Face Class
==========

A Face provides the top-level interface to the library. It holds a
connection to a forwarder and supports interest / data exchange.

:[C++]:
    | ``#include <ndn-cpp/face.hpp>``
    | Namespace: ``ndn``

:[Python]:
    Module: ``pyndn``

:[Java]:
    Package: ``net.named_data.jndn``

Face Constructors
-----------------

Face Constructor (explicit Transport)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Create a new Face object with the given Transport to manage NDN communication.

:[C++]:

    .. code-block:: c++
    
        Face(
            const ptr_lib::shared_ptr<Transport>& transport,
            const ptr_lib::shared_ptr<const Transport::ConnectionInfo>& connectionInfo
        );

:[Python]:

    .. code-block:: python

        def __init__(self,
            transport,  # Transport
            connectionInfo  # Transport.ConnectionInfo
        )

:[JavaScript]:

    .. code-block:: javascript
    
        var Face = function Face(
            transport,  // Transport
            connectionInfo  // Transport.ConnectionInfo
        )

:[Java]:

    .. code-block:: java
    
        public Face(
            Transport transport,
            Transport.ConnectionInfo connectionInfo
        )

:Parameters:

    - `transport`
	An object of a subclass of Transport to use for communication.

    - `connectionInfo`
	This must be a ConnectionInfo from the same subclass of Transport as transport. [JavaScript
        only: If connectionInfo is omitted and `transport` is a new UnixTransport() then
        attempt to create to the Unix socket for the local forwarder.]

Face Constructor (default Transport)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Create a new Face object with optional settings to manage NDN communication.

:[C++]:

    .. code-block:: c++
    
        Face(
            [const char* host]
            [, unsigned short port]
        );

:[Python]:

    .. code-block:: python
    
        def __init__(self
          [, host  # str]
          [, port  # int]
        )

:[JavaScript]:

    .. code-block:: javascript
    
        var Face = function Face(
            [settings // associative array]
        )

:[Java]:

    .. code-block:: java
    
        public Face(
            [String host]
            [, int port]
        )

:Parameters:

    - `host`
	(optional) The host to connect to. If omitted, use "localhost" with the default TcpTransport.

    - `port`
	(optional) The port to connect to. If omitted, use 6363 with the default TcpTransport.

    - `settings`
	(JavaScript only) (optional) An associative array with the following defaults:

	.. code-block:: javascript

            getTransport: function() 
                { return new WebSocketTransport(); }, // If in the browser.
                OR function() { return new TcpTransport(); }, // If in Node.js.
                // If getTransport creates a UnixTransport and connectionInfo is 
                // null, then connect to the local forwarder's Unix socket.
            getConnectionInfo: transport.defaultGetConnectionInfo,
                 // a function, on each call it returns a new 
                 // Transport.ConnectionInfo or null if there are no more hosts.
                 // If connectionInfo or host is not null, getConnectionInfo 
                 // is ignored.
            connectionInfo: null,
            host: null, // If null and connectionInfo is null, use 
                        // getHostAndPort when connecting.
                        // However, if connectionInfo is not null, use it instead.
            port: 9696,    // If in the browser.
                  OR 6363, // If in Node.js.
                           // However, if connectionInfo is not null, use it instead.

Face.expressInterest Methods
----------------------------

Face.expressInterest Method (from Interest)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Send the interest through the transport, read the entire response and call onData. If the interest times out according to interest lifetime, call onTimeout (if not omitted).

.. note::

    [except JavaScript] Your application must call :ref:`processEvents <processEvents>`.  The onData callback is called on the same thread that calls processEvents.

:[C++]:

    .. code-block:: c++
    
        uint64_t expressInterest(
            const Interest& interest,
            const OnData& onData,
            [, const OnTimeout& onTimeout]
        );

:[Python]:

    .. code-block:: python

        # Returns int
        def expressInterest(self,
            interest,     # Interest
            onData        # function object
            [, onTimeout  # function object]
        )

:[JavaScript]:

    .. code-block:: javascript

        // Returns number
        Face.prototype.expressInterest = function(
            interest     // Interest
            onData,      // function
            [, onTimeout // function]
        )

:[Java]:

    .. code-block:: java
    
        public long expressInterest(
            Interest interest,
            OnData onData,
            [, OnTimeout onTimeout]
        )

:Parameters:

    - `interest`
	The Interest to send which includes the interest lifetime for the timeout.

    - `onData`
	When a matching data packet is received, this calls ``onData(interest, data)`` where:

	    - ``interest`` is the interest given to expressInterest.
	    - ``data`` is the received Data object.

        .. note::

            You must not change the interest object - if you need to change it then make a copy.
          
    - `onTimeout`
	(optional) If the interest times out according to the interest lifetime, this calls ``onTimeout(interest)`` where:

	    - ``interest`` is the interest given to expressInterest.

:Returns:

    The pending interest ID which can be used with
    :ref:`removePendingInterest <Face.removePendingInterest>`.

:Throw:

    Throw an exception if the encoded interest size exceeds
    :ref:`getMaxNdnPacketSize() <Face.getMaxNdnPacketSize>`.
    
Face.expressInterest Method (from Name)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Encode name as an Interest, using the interestTemplate if supplied, send the interest through the transport, read the entire response and call onData. If the interest times out according to interest lifetime, call onTimeout (if not omitted).

.. note::

    [except JavaScript] Your application must call :ref:`processEvents <processEvents>`.  The onData callback is called on the same thread that calls processEvents.

:[C++]:

    .. code-block:: c++
    
        uint64_t expressInterest(
            const Name& name,
            [, const Interest* interestTemplate]
            const OnData& onData,
            [, const OnTimeout& onTimeout]
        );

:[Python]:

    .. code-block:: python
    
        # Returns int
        def expressInterest(self,
            name                # Name
            [, interestTemplate # Interest]
            onData,             # function object
            [, onTimeout        # function object]
        )

:[JavaScript]:

    .. code-block:: javascript
    
        // Returns number
        Face.prototype.expressInterest = function(
            name,               // Name
            [, interestTemplate // Interest]
            onData,             // function
            [, onTimeout        // function]
        )

:[Java]:

    .. code-block:: java
    
        public long expressInterest(
            Name name,
            [, Interest interestTemplate]
            OnData onData,
            [, OnTimeout onTimeout]
        )

:Parameters:

    - `name`
	The Name for the interest.

    - `interestTemplate`
	(optional) If not omitted, copy the interest selectors from this Interest. If omitted, use a default interest lifetime.

    - `onData`
	When a matching data packet is received, this calls ``onData(interest, data)`` where:

	    - ``interest`` is the interest given to expressInterest.
	    - ``data`` is the received Data object.

        .. note::

            You must not change the interest object - if you need to change it then make a copy.

    - `onTimeout`
	(optional) If the interest times out according to the interest lifetime, this calls ``onTimeout(interest)`` where:

	    - ``interest`` is the interest given to expressInterest.

:Returns:

    The pending interest ID which can be used with
    :ref:`removePendingInterest <Face.removePendingInterest>`.

:Throw:

    Throw an exception if the encoded interest size exceeds
    :ref:`getMaxNdnPacketSize() <Face.getMaxNdnPacketSize>`.

.. _Face.getMaxNdnPacketSize:

Face.getMaxNdnPacketSize Method
-------------------------------

This is a static method to get the practical limit of the size of a network-layer
packet. If a packet is larger than this, the library or application MAY drop it.

:[C++]:

    .. code-block:: c++

        static size_t getMaxNdnPacketSize();

:[Python]:

    .. code-block:: python

        # Returns int
        @staticmethod
        def getMaxNdnPacketSize()

:[JavaScript]:

    .. code-block:: javascript

        // Returns number
        Face.getMaxNdnPacketSize = function()

:[Java]:

    .. code-block:: java

        public static int getMaxNdnPacketSize()

:Returns:

    The maximum NDN packet size.

.. _Face.isLocal:

Face.isLocal Method
-------------------

.. container:: experimental

    .. admonition:: Experimental

       This method is experimental.  The API is not finalized.

    Check if the face is local based on the current connection through the Transport.
    This affects the processing of :ref:`registerPrefix <Face.registerPrefix>` with
    NFD: if the NFD is local, registration occurs with the '/localhost/nfd/...'
    prefix; if non-local, remote prefix registration is attempted using
    '/localhop/nfd/...' . Some Transport subclasses may cause network I/O (e.g.
    an IP host name lookup).

    :[C++]:

        .. code-block:: c++

            bool isLocal();

    :[Python]:

        .. code-block:: python

            # Returns bool
            def isLocal()

    :[JavaScript]:

        .. code-block:: javascript

            Face.prototype.isLocal = function(
                onResult,  // function
                onError    // function
            )

    :[Java]:

        .. code-block:: java

            public boolean isLocal()

    :Parameters:

        - `onResult`
            (JavaScript only) On success, this calls onResult(isLocal) where
            isLocal is true if the host is local, false if not. We use callbacks
            because this may need to do async network I/O (e.g. an IP host name
            lookup).

        - `onError`
            (JavaScript only) On failure for DNS lookup or other error, this
            calls onError(message) where message is an error string.

    :Returns:

        (except JavaScript) True if the face is local, false if not.

Face.makeCommandInterest Method
-------------------------------

.. container:: experimental

    .. admonition:: Experimental

       This method is experimental.  The API is not finalized.

    Append a timestamp component and a random value component to interest's
    name. Then use the keyChain and certificateName from 
    :ref:`setCommandSigningInfo <Face.setCommandSigningInfo>` to sign the interest.
    If the interest lifetime is not set, this sets it.

    :[C++]:

        .. code-block:: c++

            void makeCommandInterest(
                Interest& interest
            );

    :[Python]:

        .. code-block:: python

            def makeCommandInterest(self,
                interest  // Interest
            )

    :[JavaScript]:

        .. code-block:: javascript

            Face.prototype.makeCommandInterest = function(
                interest  // Interest
            )

    :[Java]:

        .. code-block:: java

            public void makeCommandInterest(
              Interest interest
            )

    :Parameters:

        - `interest`
            The interest whose name is appended with components.

.. _processEvents:

Face.processEvents Method
-------------------------

[except JavaScript] Process any packets to receive and call callbacks such as onData, onInterest or onTimeout.  This returns immediately if there is no data to receive. This blocks while calling the callbacks. You should repeatedly call this from an event loop, with calls to sleep as needed so that the loop doesn't use 100% of the CPU.  Since processEvents modifies the pending interest table, your application should make sure that it calls processEvents in the same thread as expressInterest (which also modifies the pending interest table).

:[C++]:

    .. code-block:: c++
    
        void processEvents();

:[Python]:

    .. code-block:: python
    
        def processEvents(self)

:[Java]:

    .. code-block:: java
    
        public void processEvents()

:Throw:

    This may throw an exception for reading data or in the callback for processing the data.  If you call this from an main event loop, you may want to catch and log/disregard all exceptions.

.. _Face.putData:

Face.putData Method
-------------------

The onInterest callback calls this to put a Data packet which satisfies an Interest.

:[C++]:

    .. code-block:: c++

        void putData(
            const Data& data
        );

:[Python]:

    .. code-block:: python

        def putData(self,
            data  # Data
        )

:[JavaScript]:

    .. code-block:: javascript

        Face.prototype.putData = function(
            data  // Data
        )

:[Java]:

    .. code-block:: java

        public void putData(
            Data data
        )

:Parameters:

    - `data`
        The Data packet which satisfies the interest.

:Throw:

    Throw an exception if the encoded Data packet size exceeds
    :ref:`getMaxNdnPacketSize() <Face.getMaxNdnPacketSize>`.

.. _Face.registerPrefix:

Face.registerPrefix Method
--------------------------

Register prefix with the connected NDN hub and call onInterest when a matching 
interest is received. To register a prefix with NFD, you must first call
:ref:`setCommandSigningInfo <Face.setCommandSigningInfo>`. This connects to a
local or remote forwarder according to :ref:`isLocal <Face.isLocal>`.

.. note::

    [except JavaScript] Your application must call :ref:`processEvents <processEvents>`.  The onInterest callback is called on the same thread that calls processEvents.

:[C++]:

    .. code-block:: c++

        uint64_t registerPrefix(
            const Name &prefix,
            const OnInterestCallback &onInterest,
            const OnRegisterFailed &onRegisterFailed
            [, const OnRegisterSuccess &onRegisterSuccess]
            [, const ForwardingFlags& flags]
        )

:[Python]:

    .. code-block:: python
    
        # Returns int
        def registerPrefix(self,
            prefix,               # Name
            onInterest,           # function object
            onRegisterFailed      # function object
            [, onRegisterSuccess  # function object]
            [, flags              # ForwardingFlags]
        )

:[JavaScript]:

    .. code-block:: javascript
    
        // Returns number
        Face.prototype.registerPrefix = function(
            prefix,               // Name
            onInterest,           // function
            onRegisterFailed      // function
            [, onRegisterSuccess  // function]
            [, flags              // ForwardingFlags]
        )

:[Java]:

    .. code-block:: java
    
        public long registerPrefix(
            Name prefix,
            OnInterestCallback onInterest,
            OnRegisterFailed onRegisterFailed
            [, OnRegisterSuccess onRegisterSuccess]
            [, ForwardingFlags flags]
        )

:Parameters:

    - `prefix`
	The :ref:`Name <Name>` prefix to register.

    - `onInterest`
	(optional) If supplied then this creates an :ref:`InterestFilter <InterestFilter>` from prefix so
        that when an interest is received which matches the name prefix, this calls
        ``onInterest(prefix, interest, face, interestFilterId, filter)`` where:

	    - ``prefix`` is the :ref:`Name <Name>` prefix given to registerPrefix.
	    - ``interest`` is the received :ref:`Interest <Interest>`.
	    - ``face`` is the Face with the connection which received the interest. You should encode a signed Data packet and send it using :ref:`putData <Face.putData>`.
	    - ``interestFilterId`` is the interest filter ID which can be used with :ref:`unsetInterestFilter <Face.unsetInterestFilter>`.
	    - ``filter`` is the :ref:`InterestFilter <InterestFilter>` created from the prefix.

        .. note::

            You must not change the prefix or filter objects - if you need to change them then make a copy.

        If onInterest is an empty OnInterestCallback() (C++) or null
        (JavaScript, Java) or None (PyNDN), it is ignored and you must call
        :ref:`setInterestFilter <Face.setInterestFilter>`.

    - `onRegisterFailed`
	If register prefix fails for any reason, this calls ``onRegisterFailed(prefix)`` where:

	    - ``prefix`` is the prefix given to registerPrefix.

    - `onRegisterSuccess`
	(optional) When this receives a success message from the forwarder, this calls ``onRegisterSuccess(prefix, registeredPrefixId)`` where:

	    - ``prefix`` is the prefix given to registerPrefix.
	    - ``registeredPrefixId`` is the value retured by registerPrefix.

        (The onRegisterSuccess parameter comes after onRegisterFailed because it
        can be omitted, unlike onRegisterFailed.)

    - `flags`
	(optional) The flags for finer control of how and which Interests should be forwarded towards the face.
        If omitted, use the default flags defined by the default :ref:`ForwardingFlags <ForwardingFlags>` constructor.

:Returns:

    The registered prefix ID which can be used with
    :ref:`removeRegisteredPrefix <Face.removeRegisteredPrefix>`.

.. _Face.removePendingInterest:

Face.removePendingInterest Method
---------------------------------

Remove the pending interest entry with the pendingInterestId from the pending interest table. This does not affect another pending interest with a different pendingInterestId, even if it has the same interest name. If there is no entry with the pendingInterestId, do nothing.

:[C++]:

    .. code-block:: c++
    
        void removePendingInterest(
            uint64_t pendingInterestId
        );

:[Python]:

    .. code-block:: python
    
        def removePendingInterest(self,
            pendingInterestId  # int
        )

:[JavaScript]:

    .. code-block:: javascript

        Face.prototype.removePendingInterest = function(
            pendingInterestId  // number
        )

:[Java]:

    .. code-block:: java
    
        public void removePendingInterest(
            long pendingInterestId
        )

:Parameters:

    - `pendingInterestId`
	The ID returned from expressInterest.

.. _Face.removeRegisteredPrefix:

Face.removeRegisteredPrefix Method
----------------------------------

Remove the registered prefix entry with the registeredPrefixId from the
registered prefix table. This does not affect another registered prefix with a
different registeredPrefixId, even if it has the same prefix name. If an 
interest filter was automatically created by registerPrefix, also remove it. If
there is no entry with the registeredPrefixId, do nothing.

:[C++]:

    .. code-block:: c++

        void removeRegisteredPrefix(
            uint64_t registeredPrefixId
        );

:[Python]:

    .. code-block:: python
    
        def removeRegisteredPrefix(self,
            registeredPrefixId  # int
        )

:[JavaScript]:

    .. code-block:: javascript

        Face.prototype.removeRegisteredPrefix = function(
            registeredPrefixId  // number
        )

:[Java]:

    .. code-block:: java
    
        public void removeRegisteredPrefix(
            long registeredPrefixId
        )

:Parameters:

    - `registeredPrefixId`
	The ID returned from registerPrefix.

Face.send Method
----------------

Send the encoded packet out through the face.

:[C++]:

    .. code-block:: c++

        void send(
            const Blob& encoding
        );

        void send(
            const uint8_t* encoding,
            size_t encodingLength
        );

:[Python]:

    .. code-block:: python

        def send(self,
            encoding  # Blob or an array type with int elements
        )

:[JavaScript]:

    .. code-block:: javascript

        Face.prototype.send = function(
            encoding  // Blob or Buffer
        )

:[Java]:

    .. code-block:: java

        public void send(
            Blob encoding
        )

        public void send(
            ByteBuffer encoding
        )

:Parameters:

    - `encoding`
        The Blob or byte array with the the encoded packet to send.

    - `encodingLength`
        (C++ only) The length of the encoding byte array.

:Throw:

    Throw an exception if the encoded packet size exceeds
    :ref:`getMaxNdnPacketSize() <Face.getMaxNdnPacketSize>`.

.. _Face.setCommandCertificateName:

Face.setCommandCertificateName Method
-------------------------------------

Set the certificate name used to sign command interest (e.g. for registerPrefix), using the KeyChain that was set with setCommandSigningInfo.

:[C++]:

    .. code-block:: c++
    
        void setCommandCertificateName(
            const Name& certificateName
        );

:[Python]:

    .. code-block:: python

        def setCommandCertificateName(self,
            certificateName  # Name
        )

:[JavaScript]:

    .. code-block:: javascript

        Face.prototype.setCommandCertificateName = function(
            certificateName  // Name
        )

:[Java]:

    .. code-block:: java

        public void setCommandCertificateName(
            Name certificateName
        )

:Parameters:

    - `certificateName`
	The certificate name for signing interest. This makes a copy of the Name.

.. _Face.setCommandSigningInfo:

Face.setCommandSigningInfo Method
---------------------------------

Set the KeyChain and certificate name used to sign command interests (e.g. for registerPrefix).

:[C++]:

    .. code-block:: c++
    
        void setCommandSigningInfo(
            KeyChain& keyChain,
            const Name& certificateName
        );

:[Python]:

    .. code-block:: python

        def setCommandSigningInfo(self,
            keyChain         # KeyChain
            certificateName  # Name
        )

:[JavaScript]:

    .. code-block:: javascript

        Face.prototype.setCommandSigningInfo = function(
            keyChain         // KeyChain
            certificateName  // Name
        )

:[Java]:

    .. code-block:: java

        public void setCommandSigningInfo(
            KeyChain keyChain,
            Name certificateName
        )

:Parameters:

    - `keyChain`
	The KeyChain object for signing interests, which must remain valid for the life of this Face. You must create the KeyChain object and pass it in. You can create a default KeyChain for your system with the default KeyChain constructor.

    - `certificateName`
	The certificate name for signing interest. This makes a copy of the Name. You can get the default certificate name with keyChain.getDefaultCertificateName() .

.. _Face.setInterestFilter:

Face.setInterestFilter Methods
------------------------------

Face.setInterestFilter Method (from InterestFilter)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Add an entry to the local interest filter table to call the onInterest callback
for a matching incoming Interest. This method only modifies the library's local
callback table and does not register the prefix with the forwarder. It will
always succeed. To register a prefix with the forwarder, use
:ref:`registerPrefix <Face.registerPrefix>`.

:[C++]:

    .. code-block:: c++

        uint64_t setInterestFilter(
            const InterestFilter& filter,
            const OnInterestCallback &onInterest
        )

:[Python]:

    .. code-block:: python

        # Returns int
        def setInterestFilter(self,
            filter,     # InterestFilter
            onInterest  # function object
        )

:[JavaScript]:

    .. code-block:: javascript

        // Returns number
        Face.prototype.setInterestFilter = function(
            filter,     // InterestFilter
            onInterest  // function
        )

:[Java]:

    .. code-block:: java

        public long setInterestFilter(
            InterestFilter filter,
            OnInterestCallback onInterest
        )

:Parameters:

    - `filter`
        The :ref:`InterestFilter <InterestFilter>` with a prefix and optional
        regex filter used to match the name of an incoming Interest. This makes
        a copy of filter.

    - `onInterest`
	(optional) This creates an :ref:`InterestFilter <InterestFilter>` from prefix so
        that when an interest is received which matches the name prefix, this calls
        ``onInterest(prefix, interest, face, interestFilterId, filter)`` where:

	    - ``prefix`` is the :ref:`Name <Name>` prefix given to setInterestFilter.
	    - ``interest`` is the received :ref:`Interest <Interest>`.
	    - ``face`` is the Face with the connection which received the interest. You should encode a signed Data packet and send it using :ref:`putData <Face.putData>`.
	    - ``interestFilterId`` is the interest filter ID which can be used with :ref:`unsetInterestFilter <Face.unsetInterestFilter>`.
	    - ``filter`` is the :ref:`InterestFilter <InterestFilter>` created from the prefix.

        .. note::

            You must not change the prefix or filter objects - if you need to change them then make a copy.

:Returns:

    The interest filter ID which can be used with
    :ref:`unsetInterestFilter <Face.unsetInterestFilter>`.

Face.setInterestFilter Method (from prefix)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Add an entry to the local interest filter table to call the onInterest callback
for a matching incoming Interest. This method only modifies the library's local
callback table and does not register the prefix with the forwarder. It will
always succeed. To register a prefix with the forwarder, use
:ref:`registerPrefix <Face.registerPrefix>`.

:[C++]:

    .. code-block:: c++

        uint64_t setInterestFilter(
            const Name &prefix,
            const OnInterestCallback &onInterest
        )

:[Python]:

    .. code-block:: python

        # Returns int
        def setInterestFilter(self,
            prefix,     # Name
            onInterest  # function object
        )

:[JavaScript]:

    .. code-block:: javascript

        // Returns number
        Face.prototype.setInterestFilter = function(
            prefix,     // Name
            onInterest  // function
        )

:[Java]:

    .. code-block:: java

        public long setInterestFilter(
            Name prefix,
            OnInterestCallback onInterest
        )

:Parameters:

    - `prefix`
	The :ref:`Name <Name>` prefix used to match the name of an incoming Interest.

    - `onInterest`
	(optional) This creates an :ref:`InterestFilter <InterestFilter>` from prefix so
        that when an interest is received which matches the name prefix, this calls
        ``onInterest(prefix, interest, face, interestFilterId, filter)`` where:

	    - ``prefix`` is the :ref:`Name <Name>` prefix given to setInterestFilter.
	    - ``interest`` is the received :ref:`Interest <Interest>`.
	    - ``face`` is the Face with the connection which received the interest. You should encode a signed Data packet and send it using :ref:`putData <Face.putData>`.
	    - ``interestFilterId`` is the interest filter ID which can be used with :ref:`unsetInterestFilter <Face.unsetInterestFilter>`.
	    - ``filter`` is the :ref:`InterestFilter <InterestFilter>` created from the prefix.

        .. note::

            You must not change the prefix or filter objects - if you need to change them then make a copy.

:Returns:

    The interest filter ID which can be used with
    :ref:`unsetInterestFilter <Face.unsetInterestFilter>`.

.. _Face.unsetInterestFilter:

Face.unsetInterestFilter Method
-------------------------------

Remove the interest filter entry which has the interestFilterId from the
interest filter table. This does not affect another interest filter with a
different interestFilterId, even if it has the same prefix name. If there is no
entry with the interestFilterId, do nothing.

:[C++]:

    .. code-block:: c++

        void unsetInterestFilter(
            uint64_t interestFilterId
        );

:[Python]:

    .. code-block:: python

        def unsetInterestFilter(self,
            interestFilterId  # int
        )

:[JavaScript]:

    .. code-block:: javascript

        Face.prototype.unsetInterestFilter = function(
            interestFilterId  // number
        )

:[Java]:

    .. code-block:: java

        public void unsetInterestFilter(
            long interestFilterId
        )

:Parameters:

    - `interestFilterId`
	The ID returned from :ref:`setInterestFilter <Face.setInterestFilter>`.
