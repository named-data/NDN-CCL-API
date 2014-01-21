KeyChain Class
==============

:[C++]:
    Namespace: `ndn`

The Keychain class provides a set of interfaces to the security library such as identity management, policy configuration and packet signing and verification.

KeyChain.sign Method
--------------------

Wire encode the Data object, sign it and set its signature. Note: the caller must make sure the timestamp is correct, if necessary calling ``data.getMetaInfo().setTimestampMilliseconds``.

:[C++]:

    .. code-block:: c++

        void sign(
        
            Data& data,
            const Name& certificateName
        
        );

:Parameters:

    - `data`
        The Data object to be signed.  This updates its signature and key locator field and wireEncoding.

    - `certificateName`
        The certificate name of the key to use for signing.

KeyChain.signByIdentity Method
------------------------------

Wire encode the Data object, sign it and set its signature. Note: the caller must make sure the timestamp is correct, if necessary calling ``data.getMetaInfo().setTimestampMilliseconds``.

:[C++]:

    .. code-block:: c++

        void signByIdentity(
        
            Data& data
            [, const Name& identityName]
            
        );

:Parameters:

    - `data`
        The Data object to be signed.  This updates its signature and key locator field and wireEncoding.

    - `identityName`
        (optional) The identity name for the key to use for signing.  If omitted, infer the signing identity from the data packet name.

KeyChain.verifyData Method
--------------------------

Check the signature on the Data object and call either ``onVerify`` or ``onVerifyFailed``. We use callback functions because verify may fetch information to check the signature.

:[C++]:

    .. code-block:: c++

        void verifyData(
        
            const ptr_lib::shared_ptr<Data>& data,
            const OnVerified& onVerified,
            const OnVerifyFailed& onVerifyFailed
            
        );

:Parameters:

    - `data`
        The Data object with the signature to check. It is an error if data does not have a wireEncoding. To set the wireEncoding, you can call data.wireDecode.

    - `onVerified`
        If the signature is verified, this calls ``onVerified(data)`` where:
            - `data` is the given Data object.

    - `onVerifyFailed`
        If the signature check fails, this calls ``onVerifyFailed(data)`` where:
            - `data` is the given Data object.

KeyChain.setFace Method
-----------------------

Set the Face which will be used to fetch required certificates.

:[C++]:

    .. code-block:: c++

        void setFace(
        
            Face* face
        
        );

:Parameters:

    - `face`
        The Face object.
