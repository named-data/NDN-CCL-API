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

:[JavaScript]:

    .. code-block:: javascript

        var Transport = function Transport()


Transport.ConnectionInfo Class
------------------------------

:[C++]:
    Namespace: ``ndn``


A Transport.ConnectionInfo is a base class for connection information used by subclasses of Transport.
