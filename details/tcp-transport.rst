TcpTransport.ConnectionInfo Class
=================================

:[C++]:
    Namespace: ndn

A TcpTransport::ConnectionInfo extends Transport::ConnectionInfo to hold the host and port info for the TCP connection.

TcpTransport.ConnectionInfo Constructor
---------------------------------------

Create a TcpTransport.ConnectionInfo with the given host and port.

:[C++]:

    .. code-block:: c++

        TcpTransport(
        
            const char *host
            [, unsigned short port]
            
        );

:Parameters:

    - `host`
        The host for the connection.

    - `port`
        (optional) The port number for the connection. If omitted, use 9695.

.. _TcpTransport:

TcpTransport Class
==================

:[C++]:

Namespace: `ndn`

TcpTransport Constructor
------------------------

Create a TcpTransport which extends the Transport interface to implement communication over TCP/IP.

:[C++]:

    .. code-block:: c++

        TcpTransport();

:[JavaScript]:

    .. code-block:: javascript

        var TcpTransport = function TcpTransport()

TcpTransport.connect Method
---------------------------

Connect according to the info in ConnectionInfo, and use elementListener to receive data.

:[C++]:

    .. code-block:: c++

        void connect(
        
            const Transport::ConnectionInfo& connectionInfo,
            ElementListener& elementListener
        
        );

:[JavaScript]:

    .. code-block:: javascript

        TcpTransport.prototype.connect = function(
        
            ndn // NDN
        
        )

:Parameters:

    - `connectionInfo`
        A TcpTransport.ConnectionInfo with the info for connecting.

    - `elementListener`
        The ElementListener called when an element is received.

TcpTransport.send Method
------------------------

Send the data over the connection.

:[C++]:

    .. code-block:: c++

        void send(
        
            const uint8_t* data,
            size_t dataLength
        
        );

:[JavaScript]:

    .. code-block:: javascript

        TcpTransport.prototype.send = function(
        
            data // Uint8Array
        
        )

:Parameters:

    - `data`
        The data byte array to send.

    - `dataLength`
        (C++ only) The length of the data byte array.
