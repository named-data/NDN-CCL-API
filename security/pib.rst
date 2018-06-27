.. _Pib:

Pib Class
=========

In general, a PIB (Public Information Base) stores the public portion of a
user's cryptography keys. The format and location of stored information is
indicated by the PIB locator. A PIB is designed to work with a TPM (Trusted
Platform Module) which stores private keys. There is a one-to-one association
between a PIB and a TPM, and therefore the TPM locator is recorded by the PIB
to enforce this association and prevent one from operating on mismatched PIB
and TPM.

Information in the PIB is organized in a hierarchy of
Identity-Key-Certificate. At the top level, this Pib class provides access to
identities, and allows setting a default identity. Properties of an identity
(such as PibKey objects) can be accessed after obtaining a PibIdentity object.
(Likewise, CertificateV2 objects can be obtained from a PibKey object.)

.. note::

    A Pib instance is created and managed only by the KeyChain, and is
    returned by the KeyChain :ref:`getPib() <KeyChain.getPib>` method.

:[C++]:
    | ``#include <ndn-cpp/security/pib/pib.hpp>``
    | Namespace: ``ndn``

:[Python]:
    Module: ``pyndn.security.pib``

:[Java]:
    Package: ``net.named_data.jndn.security.pib``

Pib.getDefaultIdentity Method
-----------------------------

Get the default identity.

:[C++]:

    .. code-block:: c++

        ptr_lib::shared_ptr<PibIdentity> getDefaultIdentity();

:[Python]:

    .. code-block:: python

        # Returns PibIdentity
        def getDefaultIdentity(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns PibIdentity
        Pib.prototype.getDefaultIdentity = function(
            [onComplete    // function]
            [, onError     // function]
        )

:[Java]:

    .. code-block:: java

        public final PibIdentity getDefaultIdentity()

:Parameters:

    - `onComplete`
        [JavaScript only] (optional) This calls onComplete(identity) with the
        PibIdentity object. If omitted, the return value is described below.
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

    The default :ref:`PibIdentity <PibIdentity>` object.
    [JavaScript only: However, if onComplete is supplied then return
    undefined and use onComplete as described above.]

:Throw:

    Pib.Error if there is no default identity.

Pib.getIdentity Method
----------------------

Get the identity with the name identityName.

:[C++]:

    .. code-block:: c++

        ptr_lib::shared_ptr<PibIdentity> getIdentity(
            const Name& identityName
        ) const;

:[Python]:

    .. code-block:: python

        # Returns PibIdentity
        def getIdentity(self,
            identityName  # Name
        )

:[JavaScript]:

    .. code-block:: javascript

        // Returns PibIdentity
        Pib.prototype.getIdentity = function(
            identityName   // Name
            [, onComplete  // function]
            [, onError     // function]
        )

:[Java]:

    .. code-block:: java

        public final PibIdentity getIdentity(
            Name identityName
        )

:Parameters:

    - `identityName`
        The name of the identity.

    - `onComplete`
        [JavaScript only] (optional) This calls onComplete(identity) with the
        PibIdentity object. If omitted, the return value is described below.
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

    The :ref:`PibIdentity <PibIdentity>` object.
    [JavaScript only: However, if onComplete is supplied then return
    undefined and use onComplete as described above.]

:Throw:

    Pib.Error if the identity does not exist.
