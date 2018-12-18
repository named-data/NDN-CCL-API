.. _CertificateFetcher:

CertificateFetcher Class
========================

CertificateFetcher is an abstract base class which provides an interface used
by the :ref:`Validator <Validator>` to fetch missing certificates. You should
create one of the subclasses.

:[C++]:
    | ``#include <ndn-cpp/security/v2/certificate-fetcher.hpp>``
    | Namespace: ``ndn``

:[Python]:
    Module: ``pyndn.security.v2``

:[Java]:
    Package: ``net.named_data.jndn.security.v2``

:Realizations:

    - :ref:`CertificateFetcherFromNetwork Class <CertificateFetcherFromNetwork>`
    - :ref:`CertificateFetcherOffline Class <CertificateFetcherOffline>`

.. _CertificateFetcherFromNetwork:

CertificateFetcherFromNetwork Class
===================================

CertificateFetcherFromNetwork extends CertificateFetcher to fetch missing
certificates from the network.

:[C++]:
    | ``#include <ndn-cpp/security/v2/certificate-fetcher-from-network.hpp>``
    | Namespace: ``ndn``

:[Python]:
    Module: ``pyndn.security.v2``

:[Java]:
    Package: ``net.named_data.jndn.security.v2``

CertificateFetcherFromNetwork Constructor
-----------------------------------------

Create a CertificateFetcherFromNetwork to fetch certificates using the Face.

:[C++]:

    .. code-block:: c++

        CertificateFetcherFromNetwork(
            Face& face
        );

:[Python]:

    .. code-block:: python

        def __init__(self,
            face  # Face
        )

:[JavaScript]:

    .. code-block:: javascript

        var CertificateFetcherFromNetwork = function CertificateFetcherFromNetwork(
            face  // Face
        )

:[Java]:

    .. code-block:: java

        public CertificateFetcherFromNetwork(
            Face face
        )

:Parameters:

    - `face`
        The :ref:`Face <Face>` for calling expressInterest.

.. _CertificateFetcherOffline:

CertificateFetcherOffline Class
===============================

CertificateFetcherOffline extends CertificateFetcher to implement a fetcher
that does not fetch certificates (always offline).

:[C++]:
    | ``#include <ndn-cpp/security/v2/certificate-fetcher-offline.hpp>``
    | Namespace: ``ndn``

:[Python]:
    Module: ``pyndn.security.v2``

:[Java]:
    Package: ``net.named_data.jndn.security.v2``

CertificateFetcherOffline Constructor
-------------------------------------

Create a CertificateFetcherOffline object.

:[C++]:

    .. code-block:: c++

        CertificateFetcherOffline();

:[Python]:

    .. code-block:: python

        def __init__(self)

:[JavaScript]:

    .. code-block:: javascript

        var CertificateFetcherOffline = function CertificateFetcherOffline()

:[Java]:

    .. code-block:: java

        public CertificateFetcherOffline()
