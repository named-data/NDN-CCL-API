UdpTransport.ConnectionInfo Class
=================================

A UdpTransport::ConnectionInfo extends Transport::ConnectionInfo to hold the host and port info for the UDP connection.

:[C++]:
    | ``#include <ndn-cpp/transport/udp-transport.hpp>``
    | Namespace: ``ndn``

:[Python]:
    Module: ``pyndn.transport``

UdpTransport.ConnectionInfo Constructor
---------------------------------------

Create a UdpTransport.ConnectionInfo with the given host and port.

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

:Parameters:

    - `host`
        The host for the connection.

    - `port`
        (optional) The port number for the connection. If omitted, use 6363.

.. _UdpTransport:

UdpTransport Class
==================

:[C++]:
    | ``#include <ndn-cpp/transport/udp-transport.hpp>``
    | Namespace: ``ndn``

:[Python]:
    Module: ``pyndn.transport``

UdpTransport Constructor
------------------------

Create a UdpTransport which extends the Transport interface to implement communication over UDP.

:[C++]:

    .. code-block:: c++

        UdpTransport();

:[Python]:

    .. code-block:: python

        def __init__(self)

UdpTransport.send Method
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

:Parameters:

    - `data`
        The data byte array to send.

    - `dataLength`
        (C++ only) The length of the data byte array.
