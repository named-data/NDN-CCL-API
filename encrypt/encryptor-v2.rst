.. _EncryptorV2:

EncryptorV2 Class
=================

EncryptorV2 encrypts the requested content for name-based access control (NAC)
using security v2. For the meaning of "KEK", etc. see:
https://github.com/named-data/name-based-access-control/blob/new/docs/spec.rst

:[C++]:
    | ``#include <ndn-cpp/encrypt/encryptor-v2.hpp>``
    | Namespace: ``ndn``

:[Python]:
    Module: ``pyndn.encrypt``

:[Java]:
    Package: ``net.named_data.jndn.encrypt``

EncryptorV2 Constructor
-----------------------

Create an EncryptorV2 with the given parameters. This uses the face to
register to receive Interests for the prefix {ckPrefix}/CK.

:[C++]:

    .. code-block:: c++

        EncryptorV2(
            const Name& accessPrefix,
            const Name& ckPrefix,
            const SigningInfo& ckDataSigningInfo,
            const EncryptError::OnError& onError,
            Validator* validator,
            KeyChain* keyChain,
            Face* face
        );

:[Python]:

    .. code-block:: python

        def __init__(self
            accessPrefix,       # Name
            ckPrefix,           # Name
            ckDataSigningInfo,  # SigningInfo
            onError,            # function object
            validator,          # Validator
            keyChain,           # KeyChain
            face                # Face
        )

:[JavaScript]:

    .. code-block:: javascript

        var EncryptorV2 = function EncryptorV2(
            accessPrefix,       // Name
            ckPrefix,           // Name
            ckDataSigningInfo,  // SigningInfo
            onError,            // function
            validator,          // Validator
            keyChain,           // KeyChain
            face                // Face
        )

:[Java]:

    .. code-block:: java

        public EncryptorV2(
            Name accessPrefix,
            Name ckPrefix,
            SigningInfo ckDataSigningInfo,
            OnError onError,
            Validator validator,
            KeyChain keyChain,
            Face face
        )

:Parameters:

    - `accessPrefix`
        The NAC prefix to fetch the Key Encryption Key (KEK)
        (e.g., /access/prefix/NAC/data/subset). This copies the Name.

    - `ckPrefix`
        The prefix under which Content Keys (CK) will be generated.
        (Each will have a unique version appended.) This copies the Name.

    - `ckDataSigningInfo`
        The SigningInfo parameters to sign the Content Key (CK) Data packet.
        This copies the SigningInfo.

    - `onError`
        On failure to create the CK data (failed to fetch the KEK, failed to 
        encrypt with the KEK, etc.), this calls ``onError(errorCode, message)``
        where errorCode and message are detailed below. The encrypt method will
        continue trying to retrieve the KEK until success (with each attempt
        separated by RETRY_DELAY_KEK_RETRIEVAL_MS) and onError may be called
        multiple times.

        - ``errorCode`` is from EncryptError.ErrorCode.

        - ``message`` is an error string.

          .. note::

              The library will log any exceptions thrown by this callback, but for better
              error handling the callback should catch and properly handle any exceptions.

    - `validator`
        The :ref:`Validator <Validator>` with the validation policy to ensure
        correctness of the KEK.

    - `keyChain`
        The :ref:`KeyChain <KeyChain>` used to sign Data packets.

    - `face`
        The :ref:`Face <Face>` that will be used to fetch the KEK and publish
        CK data.

EncryptorV2.encrypt Method
--------------------------

Encrypt the plainData using the existing Content Key (CK) and return a new
EncryptedContent.

:[C++]:

    .. code-block:: c++

        ptr_lib::shared_ptr<EncryptedContent> encrypt(
            const uint8_t* plainData,
            size_t plainDataLength
        );

        ptr_lib::shared_ptr<EncryptedContent> encrypt(
            const Blob& plainData
        );

:[Python]:

    .. code-block:: python

        # Returns EncryptedContent
        def encrypt(self,
            plainData,  # Blob
        )

:[JavaScript]:

    .. code-block:: javascript

        // Returns EncryptedContent
        EncryptorV2.prototype.encrypt = function(
            plainData,  // Blob
        )

:[Java]:

    .. code-block:: java

        public final EncryptedContent encrypt(
            byte[] plainData
        )

:Parameters:

    - `plainData`
        The data to encrypt.

:Returns:

    The new EncryptedContent.

EncryptorV2.regenerateCk Method
-------------------------------

Create a new Content Key (CK) and publish the corresponding CK Data packet.
This uses the onError given to the constructor to report errors.

:[C++]:

    .. code-block:: c++

        void regenerateCk();

:[Python]:

    .. code-block:: python

        def regenerateCk(self)

:[JavaScript]:

    .. code-block:: javascript

        EncryptorV2.prototype.regenerateCk = function()

:[Java]:

    .. code-block:: java

        public final void regenerateCk()
