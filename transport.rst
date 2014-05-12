Transport Class
===============

:[C++]:
    | ``#include <ndn-cpp/transport/transport.hpp>``
    | Namespace: ``ndn``

:[Python]:
    Module: ``pyndn.transport``

:[Java]:
    Package: ``net.named_data.jndn.transport``

:Realizations:

    - :ref:`UdpTransport Class <UdpTransport>`
    - :ref:`TcpTransport Class <TcpTransport>`


Transport Constructor
---------------------

Create a base class Transport where the methods throw an "unimplemented" error. You should use a derived class like :ref:`UdpTransport <UdpTransport>`.

:[C++]:

    .. code-block:: c++

        Transport();

:[Python]:

    .. code-block:: python

        def __init__(self)

:[Java]:

    .. code-block:: java
    
        public Transport()


Transport.ConnectionInfo Class
------------------------------

:[C++]:
    Namespace: ``ndn``

:[Python]:
    Module: ``pyndn.transport``

:[Java]:
    Package: ``net.named_data.jndn.transport``

A Transport.ConnectionInfo is a base class for connection information used by subclasses of Transport.
