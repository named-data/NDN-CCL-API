.. _DecryptorV2:

DecryptorV2 Class
=================

DecryptorV2 decrypts the supplied EncryptedContent element, using
asynchronous operations, contingent on the retrieval of the CK Data packet,
the KDK, and the successful decryption of both of these. For the meaning of
"KDK", etc. see:
https://github.com/named-data/name-based-access-control/blob/new/docs/spec.rst

:[C++]:
    | ``#include <ndn-cpp/encrypt/decryptor-v2.hpp>``
    | Namespace: ``ndn``

:[Python]:
    Module: ``pyndn.encrypt``

:[Java]:
    Package: ``net.named_data.jndn.encrypt``

DecryptorV2 Constructor
-----------------------

Create a DecryptorV2 with the given parameters.

:[C++]:

    .. code-block:: c++

        DecryptorV2(
            PibKey* credentialsKey,
            Validator* validator,
            KeyChain* keyChain,
            Face* face
        );

:[Python]:

    .. code-block:: python

        def __init__(self
            credentialsKey,  # PibKey
            validator,       # Validator
            keyChain,        # KeyChain
            face             # Face
        )

:[JavaScript]:

    .. code-block:: javascript

        var DecryptorV2 = function DecryptorV2(
            credentialsKey,  // PibKey
            validator,       // Validator
            keyChain,        // KeyChain
            face             // Face
        )

:[Java]:

    .. code-block:: java

        public DecryptorV2(
            PibKey credentialsKey,
            Validator validator,
            KeyChain keyChain,
            Face face
        )

:Parameters:

    - `credentialsKey`
        The credentials key to be used to retrieve and decrypt the KDK.

    - `validator`
        The :ref:`Validator <Validator>` with the validation policy to ensure
        the validity of the KDK and CK.

    - `keyChain`
        The :ref:`KeyChain <KeyChain>` that will be used to decrypt the KDK.

    - `face`
        The :ref:`Face <Face>` that will be used to fetch the CK and KDK.

DecryptorV2.decrypt Method
--------------------------

Asynchronously decrypt the encryptedContent.

:[C++]:

    .. code-block:: c++

        void decrypt(
            const ptr_lib::shared_ptr<EncryptedContent>& encryptedContent,
            const DecryptSuccessCallback& onSuccess,
            const EncryptError::OnError& onError
        );

:[Python]:

    .. code-block:: python

        def decrypt(self,
            encryptedContent,  # EncryptedContent
            onSuccess,         # function object
            onError            # function object
        )

:[JavaScript]:

    .. code-block:: javascript

        DecryptorV2.prototype.decrypt = function(
            encryptedContent,  // EncryptedContent
            onSuccess,         // function
            onError            // function
        )

:[Java]:

    .. code-block:: java

        public final void decrypt(
            EncryptedContent encryptedContent,
            DecryptSuccessCallback onSuccess,
            EncryptError.OnError onError
        )

:Parameters:

    - `encryptedContent`
        The :ref:`EncryptedContent <EncryptedContent>` to decrypt, which must
        have a KeyLocator with a KEYNAME and and initial vector. This does not
        copy the EncryptedContent object. If you may change it later, then pass
        in a copy of the object.

    - `onSuccess`
        On successful decryption, this calls ``onSuccess(plainData)`` where:

        - ``plainData`` is the decrypted :ref:`Blob <Blob>`.

          .. note::

              The library will log any exceptions thrown by this callback, but for better
              error handling the callback should catch and properly handle any exceptions.

    - `onError`
        On failure, this calls ``onError(errorCode, message)`` where:

        - ``errorCode`` is from EncryptError.ErrorCode.

        - ``message`` is an error string.

          .. note::

              The library will log any exceptions thrown by this callback, but for better
              error handling the callback should catch and properly handle any exceptions.
