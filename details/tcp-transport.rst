TcpTransport.ConnectionInfo Class
=================================

A TcpTransport::ConnectionInfo extends Transport::ConnectionInfo to hold the host and port info for the TCP connection.

:[C++]:
    | ``#include <ndn-cpp/transport/tcp-transport.hpp>``
    | Namespace: ``ndn``

:[Python]:
    Module: ``pyndn.transport``

:[Java]:
    Package: ``net.named_data.jndn.transport``

TcpTransport.ConnectionInfo Constructor
---------------------------------------

Create a TcpTransport.ConnectionInfo with the given host and port.

:[C++]:

    .. code-block:: c++

        ConnectionInfo(
            const char *host
            [, unsigned short port]
        );

:[Python]:

    .. code-block:: python

        def __init__(self,
            host     # str
            [, port  # int])

:[Java]:

    .. code-block:: java
    
        public ConnectionInfo(
            String host
            [, int port]
        )

:Parameters:

    - `host`
        The host for the connection.

    - `port`
        (optional) The port number for the connection. If omitted, use 6363.

.. _TcpTransport:

TcpTransport Class
==================

:[C++]:
    | ``#include <ndn-cpp/transport/tcp-transport.hpp>``
    | Namespace: ``ndn``

:[Python]:
    Module: ``pyndn.transport``

:[Java]:
    Package: ``net.named_data.jndn.transport``

TcpTransport Constructor
------------------------

Create a TcpTransport which extends the Transport interface to implement communication over TCP.

:[C++]:

    .. code-block:: c++

        TcpTransport();

:[Python]:

    .. code-block:: python

        def __init__(self)

:[JavaScript]:

    .. code-block:: javascript

        var TcpTransport = function TcpTransport()

:[Java]:

    .. code-block:: java
    
        public TcpTransport()

TcpTransport.send Method
------------------------

Send the data over the connection. The transport must already be connected by
a previous call to Face.expressInterest or Face.registerPrefix.

:[C++]:

    .. code-block:: c++

        void send(
            const uint8_t* data,
            size_t dataLength
        );

        void send(
            const std::vector<uint8_t>& data
        );

:[Python]:

    .. code-block:: python

        def send(self,
            data  # an array type accepted by socket.send
        )

:[JavaScript]:

    .. code-block:: javascript

        TcpTransport.prototype.send = function(
            data  // Buffer
        )

:[Java]:

    .. code-block:: java
    
        public void send(
            ByteBuffer data
        )

:Parameters:

    - `data`
        The data byte array to send.

    - `dataLength`
        (C++ only) The length of the data byte array.
