UdpTransport.ConnectionInfo Class
=================================

:[C++]:
    Namespace: `ndn`

A UdpTransport::ConnectionInfo extends Transport::ConnectionInfo to hold the host and port info for the UDP connection.

UdpTransport.ConnectionInfo Constructor
---------------------------------------

Create a UdpTransport.ConnectionInfo with the given host and port.

:[C++]:

    .. code-block:: c++

        UdpTransport(
        
            const char *host
            [, unsigned short port]
        
        );

:Parameters:

    - `host`
        The host for the connection.

    - `port`
        (optional) The port number for the connection. If omitted, use 9695.

.. _UdpTransport:

UdpTransport Class
==================

:[C++]:
    Namespace: `ndn`

UdpTransport Constructor
------------------------

Create a UdpTransport which extends the Transport interface to implement communication over UDP.

:[C++]:

    .. code-block:: c++

        UdpTransport();

UdpTransport.connect Method
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
        A UdpTransport.ConnectionInfo with the info for connecting.

    - `elementListener`
        The ElementListener called when an element is received

UdpTransport.send Method
------------------------

Send the data over the connection.

:[C++]:

    .. code-block:: c++

        void send(
        
            const uint8_t* data,
            size_t dataLength
            
        );

:Parameters:

    - `data`
        The data byte array to send.

    - `dataLength`
        (C++ only) The length of the data byte array.
