.. _AccessManagerV2:

AccessManagerV2 Class
=====================

AccessManagerV2 controls the decryption policy by publishing granular
per-namespace access policies in the form of key encryption
(KEK, plaintext public) and key decryption (KDK, encrypted private key)
key pairs. This works with EncryptorV2 and DecryptorV2 using security v2.
For the meaning of "KDK", etc. see:
https://github.com/named-data/name-based-access-control/blob/new/docs/spec.rst

:[C++]:
    | ``#include <ndn-cpp/encrypt/access-manager-v2.hpp>``
    | Namespace: ``ndn``

:[Python]:
    Module: ``pyndn.encrypt``

:[Java]:
    Package: ``net.named_data.jndn.encrypt``

KEK and KDK naming
------------------

::

    [identity]/NAC/[dataset]/KEK            /[key-id]                           (== KEK, public key)

    [identity]/NAC/[dataset]/KDK/[key-id]   /ENCRYPTED-BY/[user]/KEY/[key-id]   (== KDK, encrypted private key)

    \_____________  ______________/
                  \/
         registered with NFD

AccessManagerV2 Constructor
---------------------------

Create an AccessManagerV2 to serve the NAC public key for other data
producers to fetch, and to serve encrypted versions of the private keys
(as safe bags) for authorized consumers to fetch.

:[C++]:

    .. code-block:: c++

        AccessManagerV2(
            const ptr_lib::shared_ptr<PibIdentity>& identity,
            const Name& dataset,
            KeyChain* keyChain,
            Face* face
        );

:[Python]:

    .. code-block:: python

        def __init__(self
            identity,  # PibIdentity
            dataset,   # Name
            keyChain,  # KeyChain
            face       # Face
        )

:[JavaScript]:

    .. code-block:: javascript

        var AccessManagerV2 = function AccessManagerV2(
            identity,  // PibIdentity
            dataset,   // Name
            keyChain,  // KeyChain
            face       // Face
        )

:[Java]:

    .. code-block:: java

        public AccessManagerV2(
            PibIdentity identity,
            Name dataset,
            KeyChain keyChain,
            Face face
        )

:Parameters:

    - `identity`
        The data owner's namespace identity. (This will  be used to sign the
        KEK and KDK.)

    - `dataset`
        The name of dataset that this manager is controlling.

    - `keyChain`
        The :ref:`KeyChain <KeyChain>` used to sign Data packets.

    - `face`
        The :ref:`Face <Face>` for calling registerPrefix that will be used to
        publish the KEK and KDK Data packets.

AccessManagerV2.addMember Method
--------------------------------

Authorize a member identified by memberCertificate to decrypt data under the policy.

:[C++]:

    .. code-block:: c++

        ptr_lib::shared_ptr<Data> addMember(
            const CertificateV2& memberCertificate
        );

:[Python]:

    .. code-block:: python

        # Returns Data
        def addMember(self,
            memberCertificate,  # CertificateV2
        )

:[JavaScript]:

    .. code-block:: javascript

        // Returns Data
        AccessManagerV2.prototype.addMember = function(
            memberCertificate,  // CertificateV2
        )

:[Java]:

    .. code-block:: java

        public final Data addMember(
            CertificateV2 memberCertificate
        )

:Parameters:

    - `memberCertificate`
        The certificate that identifies the member to authorize.

:Returns:

    The published KDK Data packet.

AccessManagerV2.size Method
---------------------------

Get the number of packets stored in in-memory storage.

:[C++]:

    .. code-block:: c++

        size_t size() const;

:[Python]:

    .. code-block:: python

        # Returns int
        def size(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns number
        AccessManagerV2.prototype.size = function()

:[Java]:

    .. code-block:: java

        public final int size()

:Returns:

    The number of packets.
