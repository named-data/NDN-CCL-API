.. _Tpm:

Tpm Class
=========

The TPM (Trusted Platform Module) stores the private portion of a user's
cryptography keys. The format and location of stored information is indicated
by the TPM locator. The TPM is designed to work with a PIB (Public
Information Base) which stores public keys and related information such as
certificates.

The TPM also provides functionalities of cryptographic transformation, such
as signing and decryption.

A TPM consists of a unified front-end interface and a backend implementation.
The front-end caches the handles of private keys which are provided by the
backend implementation.

.. note::

    A Tpm instance is created and managed only by the KeyChain. It is returned
    by the KeyChain :ref:`getTpm() <KeyChain.getTpm>` method, through which it
    is possible to check for the existence of private keys.

:[C++]:
    | ``#include <ndn-cpp/security/tpm/tpm.hpp>``
    | Namespace: ``ndn``

:[Python]:
    Module: ``pyndn.security.tpm``

:[Java]:
    Package: ``net.named_data.jndn.security.tpm``

Tpm.hasKey Method
-------------------------

Check if the key with name keyName exists in the TPM.

:[C++]:

    .. code-block:: c++

        bool hasKey(
            const Name& keyName
        ) const;

:[Python]:

    .. code-block:: python

        # Returns bool
        def hasKey(self,
            keyName  # Name
        )

:[JavaScript]:

    .. code-block:: javascript

        // Returns boolean
        Tpm.prototype.hasKey = function(
            keyName        // Name
            [, onComplete  // function]
            [, onError     // function]
        )

:[Java]:

    .. code-block:: java

        public final boolean hasKey(
            Name keyName
        )

:Parameters:

    - `keyName`
        The name of the key.

    - `onComplete`
        [JavaScript only] (optional) This calls onComplete(hasKey) with the
        boolean result. If omitted, the return value is described below. (Some
        support libraries only use a callback, so onComplete is required to use
        these.)

    - `onError`
        [JavaScript only] (optional) If defined, then onComplete must be
        defined and if there is an exception, then this calls
        onError(exception) with the exception. If onComplete is defined but
        onError is undefined, then this will log any thrown exception. (Some
        support libraries only use a callback, so onError is required to be
        notified of an exception.)

:Returns:

    True if the key exists.
    [JavaScript only: However, if onComplete is supplied then return
    undefined and use onComplete as described above.]
