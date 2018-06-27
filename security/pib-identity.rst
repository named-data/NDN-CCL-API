.. _PibIdentity:

PibIdentity Class
=================

PibIdentity is at the top level in PIB's Identity-Key-Certificate hierarchy.
An identity has a Name, and contains zero or more keys, at most one of which
is set as the default key of this identity.  Properties of a key can be
accessed after obtaining a :ref:`PibKey <PibKey>` object.

:[C++]:
    | ``#include <ndn-cpp/security/pib/pib-identity.hpp>``
    | Namespace: ``ndn``

:[Python]:
    Module: ``pyndn.security.pib``

:[Java]:
    Package: ``net.named_data.jndn.security.pib``

PibIdentity.getDefaultKey Method
--------------------------------

Get the default key of this Identity.

:[C++]:

    .. code-block:: c++

        ptr_lib::shared_ptr<PibKey> getDefaultKey();

:[Python]:

    .. code-block:: python

        # Returns PibKey
        def getDefaultKey(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns PibKey
        PibIdentity.prototype.getDefaultKey = function(
            [onComplete    // function]
            [, onError     // function]
        )

:[Java]:

    .. code-block:: java

        public final PibKey getDefaultKey()

:Parameters:

    - `onComplete`
        [JavaScript only] (optional) This calls onComplete(key) with the PibKey
        object. If omitted, the return value is described below. (Some support
        libraries only use a callback, so onComplete is required to use these.)

    - `onError`
        [JavaScript only] (optional) If defined, then onComplete must be
        defined and if there is an exception, then this calls
        onError(exception) with the exception. If onComplete is defined but
        onError is undefined, then this will log any thrown exception. (Some
        support libraries only use a callback, so onError is required to be
        notified of an exception.)

:Returns:

    The default :ref:`PibKey <PibKey>` object.
    [JavaScript only: However, if onComplete is supplied then return
    undefined and use onComplete as described above.]

:Throw:

    Pib.Error if the default key has not been set.

PibIdentity.getKey Method
-------------------------

Get the key with name keyName.

:[C++]:

    .. code-block:: c++

        ptr_lib::shared_ptr<PibKey> getKey(
            const Name& keyName
        ) const;

:[Python]:

    .. code-block:: python

        # Returns PibKey
        def getKey(self,
            keyName  # Name
        )

:[JavaScript]:

    .. code-block:: javascript

        // Returns PibKey
        PibIdentity.prototype.getKey = function(
            keyName        // Name
            [, onComplete  // function]
            [, onError     // function]
        )

:[Java]:

    .. code-block:: java

        public final PibKey getKey(
            Name keyName
        )

:Parameters:

    - `keyName`
        The name of the key.

    - `onComplete`
        [JavaScript only] (optional) This calls onComplete(key) with the PibKey
        object. If omitted, the return value is described below. (Some support
        libraries only use a callback, so onComplete is required to use these.)

    - `onError`
        [JavaScript only] (optional) If defined, then onComplete must be
        defined and if there is an exception, then this calls
        onError(exception) with the exception. If onComplete is defined but
        onError is undefined, then this will log any thrown exception. (Some
        support libraries only use a callback, so onError is required to be
        notified of an exception.)

:Returns:

    The :ref:`PibKey <PibKey>` object.
    [JavaScript only: However, if onComplete is supplied then return
    undefined and use onComplete as described above.]

:Throw:

    Pib.Error if the identity does not exist, or an illegal argument exception
    if keyName does not match the identity name.

PibIdentity.getName Method
--------------------------

Get the name of the identity.

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
        PibIdentity.prototype.getName = function()

:[Java]:

    .. code-block:: java

        public final Name getName()

:Returns:

    The name of the identity. You must not change the Name object. If you need
    to change it then make a copy.
