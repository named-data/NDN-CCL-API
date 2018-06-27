.. _PibKey:

PibKey Class
============

The PibKey class provides access to a key at the second level in the PIB's'
Identity-Key-Certificate hierarchy. A PibKey object has a Name
(identity + "KEY" + keyId), and contains one or more
:ref:`CertificateV2 <CertificateV2>` objects, one of which is set as the default
certificate of this key. A certificate can be directly accessed by getting a
:ref:`CertificateV2 <CertificateV2>` object.

:[C++]:
    | ``#include <ndn-cpp/security/pib/pib-key.hpp>``
    | Namespace: ``ndn``

:[Python]:
    Module: ``pyndn.security.pib``

:[Java]:
    Package: ``net.named_data.jndn.security.pib``

PibKey.getCertificate Method
----------------------------

Get the certificate with name certificateName.

:[C++]:

    .. code-block:: c++

        ptr_lib::shared_ptr<PibKey> getCertificate(
            const Name& certificateName
        ) const;

:[Python]:

    .. code-block:: python

        # Returns PibKey
        def getCertificate(self,
            certificateName  # Name
        )

:[JavaScript]:

    .. code-block:: javascript

        // Returns PibKey
        PibKey.prototype.getCertificate = function(
            certificateName        // Name
            [, onComplete  // function]
            [, onError     // function]
        )

:[Java]:

    .. code-block:: java

        public final PibKey getCertificate(
            Name certificateName
        )

:Parameters:

    - `certificateName`
        The name of the certificate.

    - `onComplete`
        [JavaScript only] (optional) This calls onComplete(certificate) with the
        CertificateV2 object. If omitted, the return value is described below.
        (Some support libraries only use a callback, so onComplete is required
        to use these.)

    - `onError`
        [JavaScript only] (optional) If defined, then onComplete must be
        defined and if there is an exception, then this calls
        onError(exception) with the exception. If onComplete is defined but
        onError is undefined, then this will log any thrown exception. (Some
        support libraries only use a callback, so onError is required to be
        notified of an exception.)

:Returns:

    A copy of the :ref:`CertificateV2 <CertificateV2>` object.
    [JavaScript only: However, if onComplete is supplied then return
    undefined and use onComplete as described above.]

:Throw:

    Pib.Error if the certificate does not exist, or an illegal argument exception
    if certificateName does not match the key name.

PibKey.getDefaultCertificate Method
-----------------------------------

Get the default certificate for this Key.

:[C++]:

    .. code-block:: c++

        ptr_lib::shared_ptr<CertificateV2> getDefaultCertificate();

:[Python]:

    .. code-block:: python

        # Returns CertificateV2
        def getDefaultCertificate(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns CertificateV2
        PibKey.prototype.getDefaultCertificate = function(
            [onComplete    // function]
            [, onError     // function]
        )

:[Java]:

    .. code-block:: java

        public final CertificateV2 getDefaultCertificate()

:Parameters:

    - `onComplete`
        [JavaScript only] (optional) This calls onComplete(certificate) with the
        CertificateV2 object. If omitted, the return value is described below.
        (Some support libraries only use a callback, so onComplete is required
        to use these.)

    - `onError`
        [JavaScript only] (optional) If defined, then onComplete must be
        defined and if there is an exception, then this calls
        onError(exception) with the exception. If onComplete is defined but
        onError is undefined, then this will log any thrown exception. (Some
        support libraries only use a callback, so onError is required to be
        notified of an exception.)

:Returns:

    A copy of the default :ref:`CertificateV2 <CertificateV2>` object.
    [JavaScript only: However, if onComplete is supplied then return
    undefined and use onComplete as described above.]

:Throw:

    Pib.Error if the default certificate has not been set.

PibKey.getIdentityName Method
-----------------------------

Get the name of the identity this key belongs to.

:[C++]:

    .. code-block:: c++

        const Name& getIdentityName();

:[Python]:

    .. code-block:: python

        # Returns Name
        def getIdentityName(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns Name
        PibKey.prototype.getIdentityName = function()

:[Java]:

    .. code-block:: java

        public final Name getIdentityName()

:Returns:

    The name of the identity. You must not modify the Key object. If you need to
    modify it, make a copy.

PibKey.getKeyType Method
------------------------

Get the key type.

:[C++]:

    .. code-block:: c++

        KeyType getKeyType();

:[Python]:

    .. code-block:: python

        # Returns an int from the KeyType enum
        def getKeyType(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns an int from the KeyType enum.
        PibKey.prototype.getKeyType = function()

:[Java]:

    .. code-block:: java

        public final KeyType getKeyType()

:Returns:

    The key type enum value which is RSA or EC as follows.

        * C++: ``KEY_TYPE_RSA`` or ``KEY_TYPE_EC``
        * Python: ``KeyType.RSA`` or ``KeyType.EC``
        * JavaScript: ``KeyType.RSA`` or ``KeyType.EC``
        * Java: ``KeyType.RSA`` or ``KeyType.EC``

PibKey.getName Method
---------------------

Get the key name.

:[C++]:

    .. code-block:: c++

        const Name& getName();

:[Python]:

    .. code-block:: python

        # Returns Name
        def getName(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns Name
        PibKey.prototype.getName = function()

:[Java]:

    .. code-block:: java

        public final Name getName()

:Returns:

    The key name. You must not modify the Key object. If you need to modify it,
    make a copy.

PibKey.getPublicKey Method
--------------------------

Get the public key encoding.

:[C++]:

    .. code-block:: c++

        const Blob& getPublicKey();

:[Python]:

    .. code-block:: python

        # Returns Blob
        def getPublicKey(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns Blob
        PibKey.prototype.getPublicKey = function()

:[Java]:

    .. code-block:: java

        public final Blob getPublicKey()

:Returns:

    The public key encoding :ref:`Blob <Blob>`.
