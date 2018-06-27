.. _CertificateV2:

CertificateV2 Class
===================

CertificateV2 extends :ref:`Data <Data>` to represent a certificate following
the certificate format naming convention.

Overview of the NDN certificate format:

.. code-block:: none

    CertificateV2 ::= DATA-TLV TLV-LENGTH
                        Name      (= /{NameSpace}/KEY/[KeyId]/[IssuerId]/[Version])
                        MetaInfo  (.ContentType = KEY)
                        Content   (= X509PublicKeyContent)
                        SignatureInfo (= CertificateV2SignatureInfo)
                        SignatureValue

    X509PublicKeyContent ::= CONTENT-TLV TLV-LENGTH
                               BYTE+ (= public key bits in PKCS#8 format)

    CertificateV2SignatureInfo ::= SIGNATURE-INFO-TYPE TLV-LENGTH
                                     SignatureType
                                     KeyLocator
                                     ValidityPeriod
                                     ... optional critical or non-critical extension blocks ...

An example of an NDN certificate name:

.. code-block:: none

    /edu/ucla/cs/yingdi/KEY/%03%CD...%F1/%9F%D3...%B7/%FD%d2...%8E
    \_________________/    \___________/ \___________/\___________/
   Certificate Namespace      Key Id       Issuer Id     Version
        (Identity)
    \__________________________________/
                  Key Name

.. note::

    * `Key Id` is an opaque name component to identify the instance of the public
      key for the certificate namespace. The value of `Key ID` is controlled by
      the namespace owner. The library includes helpers for generating key IDs
      using an 8-byte random number, SHA-256 digest of the public key, timestamp,
      and the specified numerical identifiers.

    * `Issuer Id` is sn opaque name component to identify the issuer of the
      certificate. The value is controlled by the issuer. The library includes
      helpers to set issuer the ID to an 8-byte random number, SHA-256 digest of
      the issuer's public key, and the specified numerical identifiers.

    * `Key Name` is a logical name of the key used for management purposes. the
      Key Name includes the certificate namespace, keyword `KEY`, and `KeyId`
      components.

See https://github.com/named-data/ndn-cxx/blob/master/docs/specs/certificate-format.rst


:[C++]:
    | ``#include <ndn-cpp/security/v2/certificate-v2.hpp>``
    | Namespace: ``ndn``

:[Python]:
    Module: ``pyndn.security.v2``

:[Java]:
    Package: ``net.named_data.jndn.security.v2``

CertificateV2.getIdentity Method
--------------------------------

Get the identity name from the certificate name.

:[C++]:

    .. code-block:: c++

        Name getIdentity() const;

:[Python]:

    .. code-block:: python

        # Returns Name
        def getIdentity(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns Name
        CertificateV2.prototype.getIdentity = function()

:[Java]:

    .. code-block:: java

        public final Name getIdentity()

:Returns:

    The identity name as a new Name.

CertificateV2.getIssuerId Method
--------------------------------

Get the issuer ID component from the certificate name.

:[C++]:

    .. code-block:: c++

        Name::Component getIssuerId() const;

:[Python]:

    .. code-block:: python

        # Returns Name.Component
        def getIssuerId(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns Name.Component
        CertificateV2.prototype.getIssuerId = function()

:[Java]:

    .. code-block:: java

        public final Name.Component getIssuerId()

:Returns:

    The issuer ID component.

CertificateV2.getKeyId Method
-----------------------------

Get the key ID component from the certificate name.

:[C++]:

    .. code-block:: c++

        Name::Component getKeyId() const;

:[Python]:

    .. code-block:: python

        # Returns Name.Component
        def getKeyId(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns Name.Component
        CertificateV2.prototype.getKeyId = function()

:[Java]:

    .. code-block:: java

        public final Name.Component getKeyId()

:Returns:

    The key ID name component.

CertificateV2.getKeyName Method
-------------------------------

Get the key name from the certificate name.

:[C++]:

    .. code-block:: c++

        Name getKeyName() const;

:[Python]:

    .. code-block:: python

        # Returns Name
        def getKeyName(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns Name
        CertificateV2.prototype.getKeyName = function()

:[Java]:

    .. code-block:: java

        public final Name getKeyName()

:Returns:

    The key name as a new Name.

CertificateV2.getName Method
----------------------------

Get the name of this certificate. See the inherited
:ref:`getName() <Data.getName>` method.

CertificateV2.getPublicKey Method
---------------------------------

Get the public key DER encoding.

:[C++]:

    .. code-block:: c++

        const Blob& getPublicKey() const;

:[Python]:

    .. code-block:: python

        # Returns Blob
        def getPublicKey(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns Blob
        CertificateV2.prototype.getPublicKey = function()

:[Java]:

    .. code-block:: java

        public final Blob getPublicKey()

:Returns:

    The public key DER encoding :ref:`Blob <Blob>`.

CertificateV2.isValid Method
----------------------------

Check if the time falls within the validity period.

:[C++]:

    .. code-block:: c++

        bool isValid(
            [MillisecondsSince1970 time]
        ) const;

:[Python]:

    .. code-block:: python

        # Returns bool
        def isValid(self
            [, time  # float]
        )

:[JavaScript]:

    .. code-block:: javascript

        // Returns boolean
        CertificateV2.prototype.isValid = function(
            [time  # number]
        )

:[Java]:

    .. code-block:: java

        public final boolean isValid(
            [double time]
        )

:Parameters:

    - `time`
        (optional) The time to check as milliseconds since Jan 1, 1970 UTC. If
        omitted, use the current time.

:Returns:

    True if must be fresh, otherwise false. If not specified, the default is
    true.
