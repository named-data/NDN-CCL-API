KeyChain Class
==============

.. container:: experimental

    .. admonition:: Experimental

       The NDN security library is experimental and the API is not finalized.

    The Keychain class provides a set of interfaces to the security library such as identity management, policy configuration and packet signing and verification.

    :[C++]:
        | ``#include <ndn-cpp/security/key-chain.hpp>``
        | Namespace: ``ndn``

    :[Python]:
        Module: ``pyndn.security``

    :[Java]:
        Package: ``net.named_data.jndn.security``

KeyChain Constructor
--------------------

.. container:: experimental

    .. admonition:: Experimental

       The NDN security library is experimental and the API is not finalized.

    Create a new KeyChain with the the default IdentityManager and a NoVerifyPolicyManager. This is sufficient for signing command interests.

    :[C++]:

        .. code-block:: c++

            KeyChain();

    :[Python]:

        .. code-block:: python

            def __init__(self)

KeyChain.getDefaultCertificateName Method
-----------------------------------------

.. container:: experimental

    .. admonition:: Experimental

       The NDN security library is experimental and the API is not finalized.

    Get the default certificate name of the default identity.

    :[C++]:

        .. code-block:: c++

            Name getDefaultCertificateName();

    :[Python]:

        .. code-block:: python

            # Returns Name
            def getDefaultCertificateName(self)

    :[JavaScript]:

        .. code-block:: javascript

            // Returns Name
            KeyChain.prototype.getDefaultCertificateName = function()

    :[Java]:

        .. code-block:: java

            public final Name getDefaultCertificateName() throws SecurityException

    :Returns:

        The requested certificate name.
        
    :Throw:
    
        SecurityException if the default identity is not set or the default key name for the identity is not set or the default certificate name for the key name is not set.

KeyChain.setFace Method
-----------------------

.. container:: experimental

    .. admonition:: Experimental

       The NDN security library is experimental and the API is not finalized.

    Set the Face which will be used to fetch required certificates.

    :[C++]:

        .. code-block:: c++

            void setFace(
                Face* face
            );

    :[Python]:

        .. code-block:: python

            def setFace(self,
                face  # Face
            )

    :[JavaScript]:

        .. code-block:: javascript

            KeyChain.prototype.setFace = function(
                face  // Face
            )

    :[Java]:

        .. code-block:: java

            public final void setFace(
                Face face
            )

    :Parameters:

        - `face`
            The Face object.

.. _KeyChain.sign:

KeyChain.sign Methods
---------------------

KeyChain.sign (Data) Method
^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. container:: experimental

    .. admonition:: Experimental

       The NDN security library is experimental and the API is not finalized.

    Wire encode the Data object, sign it and set its signature. Note: the caller must make sure the timestamp is correct, if necessary calling ``data.getMetaInfo().setTimestampMilliseconds``.

    :[C++]:

        .. code-block:: c++

            void sign(
                Data& data,
                const Name& certificateName
            );

    :[Python]:

        .. code-block:: python

            def sign(self,
                data,            # Data
                certificateName  # Name
            )

    :[JavaScript]:

        .. code-block:: javascript

            KeyChain.prototype.sign = function(
                data,            // Data
                certificateName  // Name
            )

    :[Java]:

        .. code-block:: java

            public final void sign(
                Data data,
                Name certificateName
            )
            
    :Parameters:

        - `data`
            The Data object to be signed.  This updates its signature and key locator field and wireEncoding.

        - `certificateName`
            The certificate name of the key to use for signing.

KeyChain.sign (Interest) Method
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. container:: experimental

    .. admonition:: Experimental

       The NDN security library is experimental and the API is not finalized.

    Append a SignatureInfo to the Interest name, sign the name components and append a final name component with the signature bits.

    :[C++]:

        .. code-block:: c++

            void sign(
                Interest& interest,
                const Name& certificateName
            );

    :[Python]:

        .. code-block:: python

            def sign(self,
                interest,        # Interest
                certificateName  # Name
            )

    :[JavaScript]:

        .. code-block:: javascript

            KeyChain.prototype.sign = function(
                interest,        // Interest
                certificateName  // Name
            )

    :[Java]:

        .. code-block:: java

            public final void sign(
                Interest interest,
                Name certificateName
            )

    :Parameters:

        - `interest`
            The Interest object to be signed. This appends name components of SignatureInfo and the signature bits.

        - `certificateName`
            The certificate name of the key to use for signing.

.. _KeyChain.signWithSha256:

KeyChain.signWithSha256 Methods
-------------------------------

KeyChain.signWithSha256 (Data) Method
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. container:: experimental

    .. admonition:: Experimental

       The NDN security library is experimental and the API is not finalized.

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

.. container:: experimental

    .. admonition:: Experimental

       The NDN security library is experimental and the API is not finalized.

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
            The Interest object to be signed. This appends name components of SignatureInfo and the signature bits.

KeyChain.verifyData Method
--------------------------

.. container:: experimental

    .. admonition:: Experimental

       The NDN security library is experimental and the API is not finalized.

    Check the signature on the Data object and call either ``onVerify`` or ``onVerifyFailed``. We use callback functions because verify may fetch information to check the signature.

    :[C++]:

        .. code-block:: c++

            void verifyData(
                const ptr_lib::shared_ptr<Data>& data,
                const OnVerified& onVerified,
                const OnVerifyFailed& onVerifyFailed
            );

    :[Python]:

        .. code-block:: python

            def verifyData(self,
                data,           # Data
                onVerified,     # function object
                onVerifyFailed  # function object
            )

    :[JavaScript]:

        .. code-block:: javascript

            KeyChain.prototype.verifyData = function(
                data,           // Data
                onVerified,     // function object
                onVerifyFailed  // function object
            )

    :[Java]:

        .. code-block:: java

            public final void verifyData(
                Data data,
                OnVerified onVerified,
                OnVerifyFailed onVerifyFailed
            )

    :Parameters:

        - `data`
            The Data object with the signature to check. 

        - `onVerified`
            If the signature is verified, this calls ``onVerified(data)`` where:
                - `data` is the given Data object.

        - `onVerifyFailed`
            If the signature check fails, this calls ``onVerifyFailed(data)`` where:
                - `data` is the given Data object.

KeyChain.verifyInterest Method
------------------------------

.. container:: experimental

    .. admonition:: Experimental

       The NDN security library is experimental and the API is not finalized.

    Check the signature on the signed interest and call either ``onVerify`` or ``onVerifyFailed``. We use callback functions because verify may fetch information to check the signature.

    :[C++]:

        .. code-block:: c++

            void verifyInterest(
                const ptr_lib::shared_ptr<Interest>& interest,
                const OnVerifiedInterest& onVerified,
                const OnVerifyInterestFailed& onVerifyFailed
            );

    :[Python]:

        .. code-block:: python

            def verifyInterest(self,
                interest,       # Interest
                onVerified,     # function object
                onVerifyFailed  # function object
            )

    :[JavaScript]:

        .. code-block:: javascript

            KeyChain.prototype.verifyInterest = function(
                interest,       // Interest
                onVerified,     // function object
                onVerifyFailed  // function object
            )

    :[Java]:

        .. code-block:: java

            public final void verifyInterest(
                Interest interest,
                OnVerifiedInterest onVerified,
                OnVerifyInterestFailed onVerifyFailed
            )

    :Parameters:

        - `interest`
            The interest with the signature to check.

        - `onVerified`
            If the signature is verified, this calls ``onVerified(interest)`` where:
                - `interest` is the given Interest object.

        - `onVerifyFailed`
            If the signature check fails, this calls ``onVerifyFailed(interest)`` where:
                - `interest` is the given Interest object.
