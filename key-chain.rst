KeyChain Class
==============

The Keychain class provides a set of interfaces to the security library such as identity management, policy configuration and packet signing and verification.

:[C++]:
    | ``#include <ndn-cpp/security/key-chain.hpp>``
    | Namespace: ``ndn``

:[Python]:
    Module: ``pyndn.security``

:[Java]:
    Package: ``net.named_data.jndn.security``

KeyChain Constructors
---------------------

KeyChain Constructor (default)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Create a KeyChain with the default PIB and TPM, which are
platform-dependent and can be overridden system-wide or individually by the
user. This creates a security v2 KeyChain that uses CertificateV2,
:ref:`Pib <Pib>`, :ref:`Tpm <Tpm>` and Validator.

:[C++]:

    .. code-block:: c++

        KeyChain();

:[Python]:

    .. code-block:: python

        def __init__(self)

:[JavaScript]:

    .. code-block:: javascript

        var KeyChain = function KeyChain()

:[Java]:

    .. code-block:: java

        public KeyChain()

KeyChain Constructor (locator strings)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Create a KeyChain to use the PIB and TPM defined by the given locators.
This creates a security v2 KeyChain that uses CertificateV2, Pib, Tpm and
Validator

:[C++]:

    .. code-block:: c++

        KeyChain(
            const std::string& pibLocator,
            const std::string& tpmLocator
            [, bool allowReset]
        );

:[Python]:

    .. code-block:: python

        def __init__(self,
            pibLocator,    # str
            tpmLocator     # str
            [, allowReset  # bool]
        )

:[JavaScript]:

    .. code-block:: javascript

        // Returns Name
        var KeyChain = function KeyChain(
            pibLocator,    // string
            tpmLocator     // string
            [, allowReset  // boolean]
        )

:[Java]:

    .. code-block:: java

        public KeyChain(
            String pibLocator,
            String tpmLocator
            [, boolean allowReset]
        )

:Parameters:

    - `pibLocator`
        The PIB locator, e.g., "pib-sqlite3:/example/dir".

    - `tpmLocator`
        The TPM locator, e.g., "tpm-memory:".

    - `allowReset`
         (optional) If true, the PIB will be reset when the supplied
         tpmLocator mismatches the one in the PIB. If omitted or false,
         don't allow
         reset.

.. _KeyChain.getDefaultKeyParams:

KeyChain.getDefaultKeyParams Method
-----------------------------------

Get the default parameters for generating keys.

:[C++]:

    .. code-block:: c++

        static const KeyParams& getDefaultKeyParams();

:[Python]:

    .. code-block:: python

        # Returns KeyParams
        @staticmethod
        def getDefaultKeyParams()

:[JavaScript]:

    .. code-block:: javascript

        // Returns KeyParams
        KeyChain.getDefaultKeyParams = function()

:[Java]:

    .. code-block:: java

        public static KeyParams getDefaultKeyParams()

:Returns:

    The default KeyParams.

.. _KeyChain.getPib:

KeyChain.getPib Method
----------------------

Get the KeyChain's :ref:`Pib <Pib>` object, which is used to access the
hierarchy of Identity-Key-Certificate.

:[C++]:

    .. code-block:: c++

        Pib& getPib();

:[Python]:

    .. code-block:: python

        # Returns Pib
        def getPib(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns Pib
        KeyChain.prototype.getPib = function()

:[Java]:

    .. code-block:: java

        public final Pib getPib()

:Returns:

    The :ref:`Pib <Pib>` object.

.. _KeyChain.getTpm:

KeyChain.getTpm Method
----------------------

Get the KeyChain's :ref:`Tpm <Tpm>` object, which is used for private key'
operations.

:[C++]:

    .. code-block:: c++

        Tpm& getTpm();

:[Python]:

    .. code-block:: python

        # Returns Tpm
        def getTpm(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns Tpm
        KeyChain.prototype.getTpm = function()

:[Java]:

    .. code-block:: java

        public final Tpm getTpm()

:Returns:

    The :ref:`Tpm <Tpm>` object.

KeyChain Identity Management
----------------------------

KeyChain.createIdentityV2 Method
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Create a :ref:`PibIdentity <PibIdentity>` for identityName. This method will
check if the identity exists in PIB and whether the identity has a default key
and default certificate. If the identity does not exist, this method will create the
identity in the PIB. If the identity's default key does not exist, this method
will create a key pair and set it as the identity's default key. If the key's
default certificate is missing, this method will create a self-signed
certificate for the key. If identityName did not exist and no default identity
was selected before, the created identity will be set as the default identity.

:[C++]:

    .. code-block:: c++

        ptr_lib::shared_ptr<PibIdentity> createIdentityV2(
            const Name& identityName
            [, const KeyParams& params]
        );

:[Python]:

    .. code-block:: python

        # Returns PibIdentity
        def createIdentityV2(self,
            identityName  # Name
            [, params     # KeyParams]
        )

:[JavaScript]:

    .. code-block:: javascript

        // Returns PibIdentity
        KeyChain.prototype.createIdentityV2 = function(
            identityName   // Name
            [, params      // KeyParams]
            [, onComplete  // function]
            [, onError     // function]
        )

:[Java]:

    .. code-block:: java

        public final PibIdentity createIdentityV2(
            Name identityName
            [, KeyParams params]
        )

:Parameters:

    - `identityName`
        The name of the identity.

    - `params`
        (optional) The key parameters if a key needs to be generated for the
        identity. If omitted, use
        :ref:`getDefaultKeyParams() <KeyChain.getDefaultKeyParams>`.

    - `onComplete`
        [JavaScript only] (optional) This calls onComplete(identity) with the
        created PibIdentity object. If omitted, the return value is described
        below. (Some support libraries only use a callback, so onComplete is
        required to use these.)

    - `onError`
        [JavaScript only] (optional) If defined, then onComplete must be
        defined and if there is an exception, then this calls
        onError(exception) with the exception. If onComplete is defined but
        onError is undefined, then this will log any thrown exception. (Some
        support libraries only use a callback, so onError is required to be
        notified of an exception.)

:Returns:

    The created :ref:`PibIdentity <PibIdentity>` object.
    [JavaScript only: However, if onComplete is supplied then return
    undefined and use onComplete as described above.]

KeyChain.deleteIdentity Method
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Delete the identity. After this operation, the identity is invalid.

:[C++]:

    .. code-block:: c++

        void deleteIdentity(
            PibIdentity& identity
        );

:[Python]:

    .. code-block:: python

        def deleteIdentity(self,
            identity  # PibIdentity
        )

:[JavaScript]:

    .. code-block:: javascript

        KeyChain.prototype.deleteIdentity = function(
            identity   // PibIdentity
            [, onComplete  // function]
            [, onError     // function]
        )

:[Java]:

    .. code-block:: java

        public final void deleteIdentity(
            PibIdentity identity
        )

:Parameters:

    - `identity`
        The identity to delete.

    - `onComplete`
        [JavaScript only] (optional) This calls onComplete() when the operation
        is complete. If omitted, do not use it. (Some support libraries only use
        a callback, so onComplete is required to use these.)

    - `onError`
        [JavaScript only] (optional) If defined, then onComplete must be
        defined and if there is an exception, then this calls
        onError(exception) with the exception. If onComplete is defined but
        onError is undefined, then this will log any thrown exception. (Some
        support libraries only use a callback, so onError is required to be
        notified of an exception.)

KeyChain.setDefaultIdentity Method
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Set the identity as the default identity.

:[C++]:

    .. code-block:: c++

        void setDefaultIdentity(
            PibIdentity& identity
        );

:[Python]:

    .. code-block:: python

        def setDefaultIdentity(self,
            identity  # PibIdentity
        )

:[JavaScript]:

    .. code-block:: javascript

        KeyChain.prototype.setDefaultIdentity = function(
            identity   // PibIdentity
            [, onComplete  // function]
            [, onError     // function]
        )

:[Java]:

    .. code-block:: java

        public final void setDefaultIdentity(
            PibIdentity identity
        )

:Parameters:

    - `identity`
        The identity to make the default.

    - `onComplete`
        [JavaScript only] (optional) This calls onComplete() when the operation
        is complete. If omitted, do not use it. (Some support libraries only use
        a callback, so onComplete is required to use these.)

    - `onError`
        [JavaScript only] (optional) If defined, then onComplete must be
        defined and if there is an exception, then this calls
        onError(exception) with the exception. If onComplete is defined but
        onError is undefined, then this will log any thrown exception. (Some
        support libraries only use a callback, so onError is required to be
        notified of an exception.)

KeyChain Key Management
-----------------------

KeyChain.createKey Method
^^^^^^^^^^^^^^^^^^^^^^^^^

Create a :ref:`PibKey <PibKey>` for the identity according to params. If the
identity had no default key selected, the created key will be set as the default
for this identity. This method will also create a self-signed certificate for
the created key.

:[C++]:

    .. code-block:: c++

        ptr_lib::shared_ptr<PibKey> createKey(
            PibIdentity& identity
            [, const KeyParams& params]
        );

:[Python]:

    .. code-block:: python

        # Returns PibKey
        def createKey(self,
            identity   # PibIdentity
            [, params  # KeyParams]
        )

:[JavaScript]:

    .. code-block:: javascript

        // Returns PibKey
        KeyChain.prototype.createKey = function(
            identity       // PibIdentity
            [, params      // KeyParams]
            [, onComplete  // function]
            [, onError     // function]
        )

:[Java]:

    .. code-block:: java

        public final PibKey createKey(
            PibIdentity identity
            [, KeyParams params]
        )

:Parameters:

    - `identity`
        A valid :ref:`PibIdentity <PibIdentity>` object.

    - `params`
        (optional) The key parameters for generating the key. If omitted, use
        :ref:`getDefaultKeyParams() <KeyChain.getDefaultKeyParams>`.

    - `onComplete`
        [JavaScript only] (optional) This calls onComplete(key) with the new
        PibKey. If omitted, the return value is described below. (Some support
        libraries only use a callback, so onComplete is required to use these.)

    - `onError`
        [JavaScript only] (optional) If defined, then onComplete must be
        defined and if there is an exception, then this calls
        onError(exception) with the exception. If onComplete is defined but
        onError is undefined, then this will log any thrown exception. (Some
        support libraries only use a callback, so onError is required to be
        notified of an exception.)

:Returns:

    The ney :ref:`PibKey <PibKey>`.
    [JavaScript only: However, if onComplete is supplied then return
    undefined and use onComplete as described above.]

KeyChain.deleteKey Method
^^^^^^^^^^^^^^^^^^^^^^^^^

Delete the given key of the given identity. The key becomes invalid.

:[C++]:

    .. code-block:: c++

        void deleteKey(
            PibIdentity& identity,
            PibKey& key
        );

:[Python]:

    .. code-block:: python

        def deleteKey(self,
            identity  # PibIdentity
            key       # PibKey
        )

:[JavaScript]:

    .. code-block:: javascript

        KeyChain.prototype.deleteKey = function(
            identity,      // PibIdentity
            key            // PibKey
            [, onComplete  // function]
            [, onError     // function]
        )

:[Java]:

    .. code-block:: java

        public final void deleteKey(
            PibIdentity identity,
            PibKey key
        )

:Parameters:

    - `identity`
        A valid :ref:`PibIdentity <PibIdentity>` object.

    - `key`
        The key to delete.

    - `onComplete`
        [JavaScript only] (optional) This calls onComplete() when the operation
        is complete. If omitted, do not use it. (Some support libraries only use
        a callback, so onComplete is required to use these.)

    - `onError`
        [JavaScript only] (optional) If defined, then onComplete must be
        defined and if there is an exception, then this calls
        onError(exception) with the exception. If onComplete is defined but
        onError is undefined, then this will log any thrown exception. (Some
        support libraries only use a callback, so onError is required to be
        notified of an exception.)

KeyChain.setDefaultKey Method
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Set the key as the default key of identity.

:[C++]:

    .. code-block:: c++

        void setDefaultKey(
            PibIdentity& identity,
            PibKey& key
        );

:[Python]:

    .. code-block:: python

        def setDefaultKey(self,
            identity,  # PibIdentity
            key        # PibKey
        )

:[JavaScript]:

    .. code-block:: javascript

        KeyChain.prototype.setDefaultKey = function(
            identity,      // PibIdentity
            key            // PibKey
            [, onComplete  // function]
            [, onError     // function]
        )

:[Java]:

    .. code-block:: java

        public final void setDefaultKey(
            PibIdentity identity,
            PibKey key
        )

:Parameters:

    - `identity`
        A valid :ref:`PibIdentity <PibIdentity>` object.

    - `key`
        The key to become the default.

    - `onComplete`
        [JavaScript only] (optional) This calls onComplete() when the operation
        is complete. If omitted, do not use it. (Some support libraries only use
        a callback, so onComplete is required to use these.)

    - `onError`
        [JavaScript only] (optional) If defined, then onComplete must be
        defined and if there is an exception, then this calls
        onError(exception) with the exception. If onComplete is defined but
        onError is undefined, then this will log any thrown exception. (Some
        support libraries only use a callback, so onError is required to be
        notified of an exception.)

KeyChain Certificate Management
-------------------------------

KeyChain.addCertificate Method
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Add a certificate for the key. If the key had no default certificate selected,
the added certificate will be set as the default certificate for this key.

:[C++]:

    .. code-block:: c++

        void addCertificate(
            PibKey& key,
            const CertificateV2& certificate
        );

:[Python]:

    .. code-block:: python

        def addCertificate(self,
            key,         # PibKey
            certificate  # CertificateV2
        )

:[JavaScript]:

    .. code-block:: javascript

        KeyChain.prototype.addCertificate = function(
            key,         // PibKey
            certificate  // CertificateV2
        )

:[Java]:

    .. code-block:: java

        public final void addCertificate(
            PibKey key,
            CertificateV2 certificate
        )

:Parameters:

    - `key`
        A valid :ref:`PibKey <PibKey>` object.

    - `certificate`
        The :ref:`certificate <CertificateV2>` to add. This copies the object.

    - `onComplete`
        [JavaScript only] (optional) This calls onComplete() when the operation
        is complete. If omitted, do not use it. (Some support libraries only use
        a callback, so onComplete is required to use these.)

    - `onError`
        [JavaScript only] (optional) If defined, then onComplete must be
        defined and if there is an exception, then this calls
        onError(exception) with the exception. If onComplete is defined but
        onError is undefined, then this will log any thrown exception. (Some
        support libraries only use a callback, so onError is required to be
        notified of an exception.)

KeyChain.deleteCertificate Method
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Delete the certificate with the given name from the given key. If the
certificate does not exist, this does nothing.

:[C++]:

    .. code-block:: c++

        void deleteCertificate(
            PibKey& key,
            const Name& certificateName
        );

:[Python]:

    .. code-block:: python

        def deleteCertificate(self,
            key,             # PibKey
            certificateName  # Name
        )

:[JavaScript]:

    .. code-block:: javascript

        KeyChain.prototype.deleteCertificate = function(
            key,             // PibKey
            certificateName  // Name
            [, onComplete    // function]
            [, onError       // function]
        )

:[Java]:

    .. code-block:: java

        public final void deleteCertificate(
            PibKey key,
            Name certificateName
        )

:Parameters:

    - `key`
        A valid :ref:`PibKey <PibKey>` object.

    - `certificateName`
        The name of the certificate to delete.

    - `onComplete`
        [JavaScript only] (optional) This calls onComplete() when the operation
        is complete. If omitted, do not use it. (Some support libraries only use
        a callback, so onComplete is required to use these.)

    - `onError`
        [JavaScript only] (optional) If defined, then onComplete must be
        defined and if there is an exception, then this calls
        onError(exception) with the exception. If onComplete is defined but
        onError is undefined, then this will log any thrown exception. (Some
        support libraries only use a callback, so onError is required to be
        notified of an exception.)

KeyChain.setDefaultCertificate Method
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Set the certificate as the default certificate of the key. The certificate will
be added to the key, potentially overriding an existing certificate if it has
the same name (without considering implicit digest).

:[C++]:

    .. code-block:: c++

        void setDefaultCertificate(
            PibKey& key,
            const CertificateV2& certificate
        );

:[Python]:

    .. code-block:: python

        def setDefaultCertificate(self,
            key,         # PibKey
            certificate  # CertificateV2
        )

:[JavaScript]:

    .. code-block:: javascript

        KeyChain.prototype.setDefaultCertificate = function(
            key,           // PibKey
            certificate    // CertificateV2
            [, onComplete  // function]
            [, onError     // function]
        )

:[Java]:

    .. code-block:: java

        public final void setDefaultCertificate(
            PibKey key,
            CertificateV2 certificate
        )

:Parameters:

    - `key`
        A valid :ref:`PibKey <PibKey>` object.

    - `certificate`
        The :ref:`certificate <CertificateV2>` to become the default. This
        copies the object.

    - `onComplete`
        [JavaScript only] (optional) This calls onComplete() when the operation
        is complete. If omitted, do not use it. (Some support libraries only use
        a callback, so onComplete is required to use these.)

    - `onError`
        [JavaScript only] (optional) If defined, then onComplete must be
        defined and if there is an exception, then this calls
        onError(exception) with the exception. If onComplete is defined but
        onError is undefined, then this will log any thrown exception. (Some
        support libraries only use a callback, so onError is required to be
        notified of an exception.)

KeyChain Signing Methods
------------------------

KeyChain.sign (Data) Method
^^^^^^^^^^^^^^^^^^^^^^^^^^^

Wire encode the Data object, sign it according to the supplied signing
parameters, and set its signature.

:[C++]:

    .. code-block:: c++

        void sign(
            Data& data,
            const SigningInfo& params
        );

:[Python]:

    .. code-block:: python

        def sign(self,
            data,   # Data
            params  # SigningInfo
        )

:[JavaScript]:

    .. code-block:: javascript

        KeyChain.prototype.sign = function(
            data,   // Data
            params  // SigningInfo
            [, onComplete  // function]
            [, onError     // function]
        )

:[Java]:

    .. code-block:: java

        public final void sign(
            Data data,
            SigningInfo params
        )

:Parameters:

    - `data`
        The Data object to be signed. This replaces its Signature
        object based on the type of key and other info in the SigningInfo params,
        and updates the wireEncoding.

    - `params`
        The signing parameters.

    - `onComplete`
        [JavaScript only] (optional) This calls onComplete(data) with the
        supplied Data object which has been modified to set its signature. If
        omitted, the return value is described below. (Some support libraries
        only use a callback, so onComplete is required to use these.)

    - `onError`
        [JavaScript only] (optional) If defined, then onComplete must be
        defined and if there is an exception, then this calls
        onError(exception) with the exception. If onComplete is defined but
        onError is undefined, then this will log any thrown exception. (Some
        support libraries only use a callback, so onError is required to be
        notified of an exception.)

KeyChain.sign (Interest) Method
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Sign the Interest according to the supplied signing parameters. Append a
SignatureInfo to the Interest name, sign the encoded name components and
append a final name component with the signature bits.

:[C++]:

    .. code-block:: c++

        void sign(
            Interest& interest,
            const SigningInfo& params
        );

:[Python]:

    .. code-block:: python

        def sign(self,
            interest,  # Interest
            params     # SigningInfo
        )

:[JavaScript]:

    .. code-block:: javascript

        KeyChain.prototype.sign = function(
            interest,  // Interest
            params     // SigningInfo
            [, onComplete  // function]
            [, onError     // function]
        )

:[Java]:

    .. code-block:: java

        public final void sign(
            Interest interest,
            SigningInfo params
        )

:Parameters:

    - `interest`
        The Interest object to be signed. This appends name
        components of SignatureInfo and the signature bits.

    - `params`
        The signing parameters.

    - `onComplete`
        [JavaScript only] (optional) This calls onComplete(interest) with the
        supplied Interest object which has been modified to set its signature.
        If omitted, the return value is described below. (Some support libraries
        only use a callback, so onComplete is required to use these.)

    - `onError`
        [JavaScript only] (optional) If defined, then onComplete must be
        defined and if there is an exception, then this calls
        onError(exception) with the exception. If onComplete is defined but
        onError is undefined, then this will log any thrown exception. (Some
        support libraries only use a callback, so onError is required to be
        notified of an exception.)

.. _KeyChain.signWithSha256:

KeyChain.signWithSha256 (Data) Method
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Wire encode the Data object, digest it and set its SignatureInfo to a DigestSha256.

:[C++]:

    .. code-block:: c++

        void signWithSha256(
            Data& data
        );

:[Python]:

    .. code-block:: python

        def signWithSha256(self,
            data  # Data
        )

:[JavaScript]:

    .. code-block:: javascript

        KeyChain.prototype.signWithSha256 = function(
            data  // Data
        )

:[Java]:

    .. code-block:: java

        public final void signWithSha256(
            Data data
        )

:Parameters:

    - `data`
        The Data object to be signed.  This updates its signature.

KeyChain.signWithSha256 (Interest) Method
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Append a SignatureInfo for DigestSha256 to the Interest name, digest the
name components and append a final name component with the signature bits
(which is the digest).

:[C++]:

    .. code-block:: c++

        void signWithSha256(
            Interest& interest
        );

:[Python]:

    .. code-block:: python

        def signWithSha256(self,
            interest  # Interest
        )

:[JavaScript]:

    .. code-block:: javascript

        KeyChain.prototype.signWithSha256 = function(
            interest  // Interest
        )

:[Java]:

    .. code-block:: java

        public final void signWithSha256(
            Interest interest
        )

:Parameters:

    - `interest`
        The Interest object to be signed. This appends name components of
        SignatureInfo and the signature bits.
