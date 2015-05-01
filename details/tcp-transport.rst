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
