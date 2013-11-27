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
            const ptr_lib::shared_ptr<const Transport::ConnectionInfo>& connectionInfo
        
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

            getTransport: function() { return new WebSocketTransport(); },
            getHostAndPort: transport.defaultGetHostAndPort,
                 // a function, on each call it returns 
                 // a new { host: host, port: port } or null if there are no more hosts.
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

            getTransport: function() { return new WebSocketTransport(); },
            getHostAndPort: transport.defaultGetHostAndPort,
                // a function, on each call it returns a new 
                // { host: host, port: port } or null if there are no more hosts.
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

Face.registerPrefix Method
--------------------------

Register prefix with the connected NDN hub and call onInterest when a matching interest is received.

C++ only: Your application must call processEvents.

:[C++]:

    .. code-block:: c++
    
        unsigned int registerPrefix(
        
            const Name& prefix,
            const OnInterest& onInterest,
            const OnRegisterFailed& onRegisterFailed,
            [, ForwardingFlags flags]
        
        );

:[JavaScript]:

    .. code-block:: javascript
    
        Face.prototype.registerPrefix = function(
        
            name,             // Name
            onInterest        // function
            onRegisterFailed  // function
            [, flags          // ForwardingFlags]
        
        )

:[Python]:

    .. code-block:: python
    
        def setInterestFilter(self,
        
            name     # Name
            closure  # Closure
            [, flags # int]
        
        )

:Parameters:

    - ``prefix``
	The Name prefix.

    - ``onInterest``
	When an interest is received which matches the name prefix, this calls ``onInterest(prefix, interest, transport, registeredPrefixId)`` where:

	    - ``prefix`` is the prefix given to registerPrefix.
	    - ``interest`` is the received interest.
	    - ``transport`` is the Transport with the connection which received the interest. You must encode a signed Data packet and send it using transport.send().
	    - ``registeredPrefixId`` is the registered prefix ID which can be used with removeRegisteredPrefix.

    - ``onRegisterFailed``
	If failed to retrieve the connected hub's ID or failed to register the prefix, this calls onRegisterFailed(prefix) where:
	    - ``prefix`` is the prefix given to registerPrefix.

    - ``flags``
	(optional) The flags for finer control of which interests are forward to the application.  If omitted, use the default flags defined by the default ForwardingFlags constructor.

:Returns:

    The registered prefix ID which can be used with removeRegisteredPrefix.

Face.removeRegisteredPrefix Method
----------------------------------

Remove the registered prefix entry with the registeredPrefixId from the pending interest table.  This does not affect another registered prefix with a different registeredPrefixId, even it if has the same prefix name. If there is no entry with the registeredPrefixId, do nothing.

:[C++]:

    .. code-block:: c++
    
        void removeRegisteredPrefix(
        
            unsigned int registeredPrefixId
        
        );

:Parameters:

    - ``registeredPrefixId``
	The ID returned from registerPrefix.

Face.processEvents Method
-------------------------

C++ only: Process any data to receive and call data or timeout callbacks.  This is non-blocking and will return immediately if there is no data to receive.  You should repeatedly call this from an event loop, with calls to sleep as needed so that the loop doesn't use 100% of the CPU.  Since processEvents modifies the pending interest table, your application should make sure that it calls processEvents in the same thread as expressInterest (which also modifies the pending interest table).

:[C++]:

    .. code-block:: c++
    
        void processEvents();

:Throw:

    This may throw an exception for reading data or in the callback for processing the data.  If you call this from an main event loop, you may want to catch and log/disregard all exceptions.

