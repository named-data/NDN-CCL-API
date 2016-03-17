.. _Signature:

Signature Class
===============

A Signature is an abstract base class providing methods to work with the signature information in an interest or data packet. You must create an object of a subclass, for example Sha256WithRsaSignature.

:[C++]:
    | ``#include <ndn-cpp/signature.hpp>``
    | Namespace: ``ndn``

:[Python]:
    Module: ``pyndn``

:[Java]:
    Package: ``net.named_data.jndn``

Signature.clone Method
----------------------

Return a pointer to a new Signature which is a copy of this signature. This is abstract, the subclass must implement it.

:[C++]:

    .. code-block:: c++

        virtual ptr_lib::shared_ptr<Signature> clone() const = 0;

:[Python]:

    .. code-block:: python

        # Returns a subclass of Signature
        def clone(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns a subclass of Signature
        Signature.prototype.clone = function()

:[Java]:

    .. code-block:: java
    
        public abstract Object clone()
        
:Returns:

An new object of a subclass of Signature which is a clone of this object.

.. _DigestSha256Signature:

DigestSha256Signature Class
===========================

A DigestSha256Signature extends Signature and holds the signature bits (which
are only the SHA256 digest) and an empty SignatureInfo for a data packet or
signed interest.

:[C++]:
    | ``#include <ndn-cpp/digest-sha256-signature.hpp>``
    | Namespace: ``ndn``

:[Python]:
    Module: ``pyndn``

:[Java]:
    Package: ``net.named_data.jndn``

DigestSha256Signature Constructor
---------------------------------

Create a new DigestSha256Signature object.

:[C++]:

    .. code-block:: c++

        DigestSha256Signature();

:[Python]:

    .. code-block:: python

        def __init__(self)

:[JavaScript]:

    .. code-block:: javascript

        var DigestSha256Signature = function DigestSha256Signature()

:[Java]:

    .. code-block:: java

        public DigestSha256Signature()

DigestSha256Signature Get Methods
---------------------------------

DigestSha256Signature.getSignature Method
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Get the signature bytes (which are only the digest).

:[C++]:

    .. code-block:: c++

        const Blob& getSignature() const;

:[Python]:

    .. code-block:: python

        # Returns Blob
        def getSignature(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns Blob
        DigestSha256Signature.prototype.getSignature = function()

:[Java]:

    .. code-block:: java

        public final Blob getSignature()

:Returns:

    The signature bytes. If not specified, the value :ref:`isNull() <isNull>`.

DigestSha256Signature Set Methods
---------------------------------

DigestSha256Signature.setSignature Method
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Set the signature bytes (which are only the digest) to the given value.

.. note::

    Normally you do not set the signature bytes directly, but instead use :ref:`KeyChain.signWithSha256 <KeyChain.signWithSha256>`.

:[C++]:

    .. code-block:: c++

        void setSignature(
            const Blob& signature
        );

:[Python]:

    .. code-block:: python

        def setSignature(self,
            signature  # Blob
        )

:[JavaScript]:

    .. code-block:: javascript

        DigestSha256Signature.prototype.setSignature = function(
            signature  // Blob
        )

:[Java]:

    .. code-block:: java

        public final void setSignature(
            Blob signature
        )

:Parameters:

    - `signature`
        A Blob with the signature bytes.

DigestSha256Signature.clone Method
-----------------------------------

Return a pointer to a new DigestSha256Signature which is a copy of this signature.

:[C++]:

    .. code-block:: c++

        virtual ptr_lib::shared_ptr<Signature> clone() const;

:[Python]:

    .. code-block:: python

        # Returns DigestSha256Signature
        def clone(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns DigestSha256Signature
        DigestSha256Signature.prototype.clone = function()

:[Java]:

    .. code-block:: java

        public Object clone()

:Returns:

    A new DigestSha256Signature object.

.. _GenericSignature:

GenericSignature Class
======================

A GenericSignature extends Signature and holds the encoding bytes of the
SignatureInfo so that the application can process experimental signature
types. When decoding a packet, if the type of SignatureInfo is not
recognized, the library creates a GenericSignature.

:[C++]:
    | ``#include <ndn-cpp/generic-signature.hpp>``
    | Namespace: ``ndn``

:[Python]:
    Module: ``pyndn``

:[Java]:
    Package: ``net.named_data.jndn``

GenericSignature Constructor
----------------------------

Create a new GenericSignature object.

:[C++]:

    .. code-block:: c++

        GenericSignature();

:[Python]:

    .. code-block:: python

        def __init__(self)

:[JavaScript]:

    .. code-block:: javascript

        var GenericSignature = function GenericSignature()

:[Java]:

    .. code-block:: java

        public GenericSignature()

GenericSignature Get Methods
----------------------------

GenericSignature.getSignature Method
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Get the signature bytes.

:[C++]:

    .. code-block:: c++

        const Blob& getSignature() const;

:[Python]:

    .. code-block:: python

        # Returns Blob
        def getSignature(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns Blob
        GenericSignature.prototype.getSignature = function()

:[Java]:

    .. code-block:: java

        public final Blob getSignature()

:Returns:

    The signature bytes. If not specified, the value :ref:`isNull() <isNull>`.

GenericSignature.getSignatureInfoEncoding Method
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Get the bytes of the entire signature info encoding (including the type code).

:[C++]:

    .. code-block:: c++

        const Blob& getSignatureInfoEncoding() const;

:[Python]:

    .. code-block:: python

        # Returns Blob
        def getSignatureInfoEncoding(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns Blob
        GenericSignature.prototype.getSignatureInfoEncoding = function()

:[Java]:

    .. code-block:: java

        public final Blob getSignatureInfoEncoding()

:Returns:

    The encoding bytes. If not specified, the value :ref:`isNull() <isNull>`.

GenericSignature.getTypeCode Method
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Get the type code of the signature type. When wire decode calls
setSignatureInfoEncoding, it sets the type code. Note that the type code is
ignored during wire encode, which simply uses getSignatureInfoEncoding() where
the encoding already has the type code.

:[C++]:

    .. code-block:: c++

        int getTypeCode() const;

:[Python]:

    .. code-block:: python

        # Returns int
        def getTypeCode(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns number
        GenericSignature.prototype.getTypeCode = function()

:[Java]:

    .. code-block:: java

        public final int getTypeCode()

:Returns:

    The type code. If not specified, return ``-1`` (C++ and Java)
    or ``None`` (Python) or ``undefined`` (JavaScript).

GenericSignature Set Methods
----------------------------

GenericSignature.setSignature Method
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Set the signature bytes to the given value.

:[C++]:

    .. code-block:: c++

        void setSignature(
            const Blob& signature
        );

:[Python]:

    .. code-block:: python

        def setSignature(self,
            signature  # Blob
        )

:[JavaScript]:

    .. code-block:: javascript

        GenericSignature.prototype.setSignature = function(
            signature  // Blob
        )

:[Java]:

    .. code-block:: java

        public final void setSignature(
            Blob signature
        )

:Parameters:

    - `signature`
        A Blob with the signature bytes.

GenericSignature.setSignatureInfoEncoding Method
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Get the type code of the signature type. When wire decode calls
setSignatureInfoEncoding, it sets the type code. Note that the type code is
ignored during wire encode, which simply uses getSignatureInfoEncoding() where
the encoding already has the type code.

:[C++]:

    .. code-block:: c++

        void setSignatureInfoEncoding(
            const Blob& signatureInfoEncoding
            [, int typeCode]
        );

:[Python]:

    .. code-block:: python

        def setSignatureInfoEncoding(self,
            signatureInfoEncoding  # Blob
            [, typeCode]           # int
        )

:[JavaScript]:

    .. code-block:: javascript

        GenericSignature.prototype.setSignatureInfoEncoding = function(
            signatureInfoEncoding  // Blob
            [, typeCode]           // number
        )

:[Java]:

    .. code-block:: java

        public final void setSignatureInfoEncoding(
            Blob signatureInfoEncoding
            [, int typeCode]
        )

:Parameters:

    - `signatureInfoEncoding`
        A Blob with the encoding bytes.

    - `typeCode`
        The type code of the signature type. If not known, set to ``-1``
        (C++ and Java) or ``None`` (Python) or ``undefined`` (JavaScript).
        (When a GenericSignature is created by wire decoding, it sets the
        typeCode.)

GenericSignature.clone Method
------------------------------

Return a pointer to a new GenericSignature which is a copy of this signature.

:[C++]:

    .. code-block:: c++

        virtual ptr_lib::shared_ptr<Signature> clone() const;

:[Python]:

    .. code-block:: python

        # Returns GenericSignature
        def clone(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns GenericSignature
        GenericSignature.prototype.clone = function()

:[Java]:

    .. code-block:: java

        public Object clone()

:Returns:

    A new GenericSignature object.

.. _Sha256WithRsaSignature:

Sha256WithRsaSignature Class
============================

A Sha256WithRsaSignature extends Signature and holds the signature bits and other info representing a SHA256-with-RSA signature in an interest or data packet.

:[C++]:
    | ``#include <ndn-cpp/sha256-with-rsa-signature.hpp>``
    | Namespace: ``ndn``

:[Python]:
    Module: ``pyndn``

:[Java]:
    Package: ``net.named_data.jndn``

Sha256WithRsaSignature Constructor
----------------------------------

Create a new Sha256WithRsaSignature object.

:[C++]:

    .. code-block:: c++

        Sha256WithRsaSignature();

:[Python]:

    .. code-block:: python

        def __init__(self)

:[JavaScript]:

    .. code-block:: javascript

        var Sha256WithRsaSignature = function Sha256WithRsaSignature()

:[Java]:

    .. code-block:: java
    
        public Sha256WithRsaSignature()

Sha256WithRsaSignature Get Methods
----------------------------------

Sha256WithRsaSignature.getKeyLocator Method
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Get the signature :ref:`KeyLocator <KeyLocator>` object.

:[C++]:

    .. code-block:: c++

        KeyLocator& getKeyLocator();

        const KeyLocator& getKeyLocator() const;

:[Python]:

    .. code-block:: python
    
        # Returns KeyLocator
        def getKeyLocator(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns KeyLocator
        Sha256WithRsaSignature.prototype.getKeyLocator = function()

:[Java]:

    .. code-block:: java
    
        public final KeyLocator getKeyLocator()

:Returns:

    The :ref:`KeyLocator <KeyLocator>` object. If not specified, the 
    key locator getType() is not specified.

Sha256WithRsaSignature.getSignature Method
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Get the signature bytes.

:[C++]:

    .. code-block:: c++

        const Blob& getSignature() const;

:[Python]:

    .. code-block:: python

        # Returns Blob
        def getSignature(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns Blob
        Sha256WithRsaSignature.prototype.getSignature = function()

:[Java]:

    .. code-block:: java
    
        public final Blob getSignature()
    
:Returns:

    The signature bytes. If not specified, the value :ref:`isNull() <isNull>`.

Sha256WithRsaSignature Set Methods
----------------------------------

Sha256WithRsaSignature.setKeyLocator Method
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Set this signature object to use a copy of the given :ref:`KeyLocator <KeyLocator>` object.

.. note::

    You can also call getKeyLocator and change the key locator directly.

:[C++]:

    .. code-block:: c++

        void setKeyLocator(
            const KeyLocator& keyLocator
        );

:[Python]:

    .. code-block:: python
    
        def setKeyLocator(self,
            keyLocator  # KeyLocator
        )

:[JavaScript]:

    .. code-block:: javascript

        Sha256WithRsaSignature.prototype.setKeyLocator = function(
            keyLocator  // KeyLocator
        )

:[Java]:

    .. code-block:: java
    
        public final void setKeyLocator(
            KeyLocator keyLocator
        )

:Parameters:

    - `keyLocator`
        The :ref:`KeyLocator <KeyLocator>` object. This makes a copy of the object. 
        If no key locator is specified, set to a new default KeyLocator(), or to a 
        KeyLocator with an unspecified type.
        
Sha256WithRsaSignature.setSignature Method
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Set the signature bytes to the given value.

.. note::

    Normally you do not set the signature bytes directly, but instead use :ref:`KeyChain.sign <KeyChain.sign>`.

:[C++]:

    .. code-block:: c++

        void setSignature(
            const Blob& signature
        );

:[Python]:

    .. code-block:: python

        def setSignature(self,
            signature  # Blob
        )

:[JavaScript]:

    .. code-block:: javascript

        Sha256WithRsaSignature.prototype.setSignature = function(
            signature  // Blob
        )

:[Java]:

    .. code-block:: java
    
        public final void setSignature(
            Blob signature
        )

:Parameters:

    - `signature`
        A Blob with the signature bytes.

Sha256WithRsaSignature.clone Method
-----------------------------------

Return a pointer to a new Sha256WithRsaSignature which is a copy of this signature.

:[C++]:

    .. code-block:: c++

        virtual ptr_lib::shared_ptr<Signature> clone() const;

:[Python]:

    .. code-block:: python

        # Returns Sha256WithRsaSignature
        def clone(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns Sha256WithRsaSignature
        Sha256WithRsaSignature.prototype.clone = function()

:[Java]:

    .. code-block:: java
    
        public Object clone()

:Returns:

    A new Sha256WithRsaSignature object.

.. _Sha256WithEcdsaSignature:

Sha256WithEcdsaSignature Class
==============================

A Sha256WithEcdsaSignature extends Signature and holds the signature bits and other info representing a SHA256-with-ECDSA signature in an interest or data packet.

:[C++]:
    | ``#include <ndn-cpp/sha256-with-ecdsa-signature.hpp>``
    | Namespace: ``ndn``

:[Python]:
    Module: ``pyndn``

:[Java]:
    Package: ``net.named_data.jndn``

Sha256WithEcdsaSignature Constructor
------------------------------------

Create a new Sha256WithEcdsaSignature object.

:[C++]:

    .. code-block:: c++

        Sha256WithEcdsaSignature();

:[Python]:

    .. code-block:: python

        def __init__(self)

:[Java]:

    .. code-block:: java

        public Sha256WithEcdsaSignature()

Sha256WithEcdsaSignature Get Methods
------------------------------------

Sha256WithEcdsaSignature.getKeyLocator Method
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Get the signature :ref:`KeyLocator <KeyLocator>` object.

:[C++]:

    .. code-block:: c++

        KeyLocator& getKeyLocator();

        const KeyLocator& getKeyLocator() const;

:[Python]:

    .. code-block:: python

        # Returns KeyLocator
        def getKeyLocator(self)

:[Java]:

    .. code-block:: java

        public final KeyLocator getKeyLocator()

:Returns:

    The :ref:`KeyLocator <KeyLocator>` object. If not specified, the
    key locator getType() is not specified.

Sha256WithEcdsaSignature.getSignature Method
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Get the signature bytes.

:[C++]:

    .. code-block:: c++

        const Blob& getSignature() const;

:[Python]:

    .. code-block:: python

        # Returns Blob
        def getSignature(self)

:[Java]:

    .. code-block:: java

        public final Blob getSignature()

:Returns:

    The signature bytes. If not specified, the value :ref:`isNull() <isNull>`.

Sha256WithEcdsaSignature Set Methods
------------------------------------

Sha256WithEcdsaSignature.setKeyLocator Method
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Set this signature object to use a copy of the given :ref:`KeyLocator <KeyLocator>` object.

.. note::

    You can also call getKeyLocator and change the key locator directly.

:[C++]:

    .. code-block:: c++

        void setKeyLocator(
            const KeyLocator& keyLocator
        );

:[Python]:

    .. code-block:: python

        def setKeyLocator(self,
            keyLocator  # KeyLocator
        )

:[Java]:

    .. code-block:: java

        public final void setKeyLocator(
            KeyLocator keyLocator
        )

:Parameters:

    - `keyLocator`
        The :ref:`KeyLocator <KeyLocator>` object. This makes a copy of the object.
        If no key locator is specified, set to a new default KeyLocator(), or to a
        KeyLocator with an unspecified type.

Sha256WithEcdsaSignature.setSignature Method
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Set the signature bytes to the given value.

.. note::

    Normally you do not set the signature bytes directly, but instead use :ref:`KeyChain.sign <KeyChain.sign>`.

:[C++]:

    .. code-block:: c++

        void setSignature(
            const Blob& signature
        );

:[Python]:

    .. code-block:: python

        def setSignature(self,
            signature  # Blob
        )

:[Java]:

    .. code-block:: java

        public final void setSignature(
            Blob signature
        )

:Parameters:

    - `signature`
        A Blob with the signature bytes.

Sha256WithEcdsaSignature.clone Method
-------------------------------------

Return a pointer to a new Sha256WithEcdsaSignature which is a copy of this signature.

:[C++]:

    .. code-block:: c++

        virtual ptr_lib::shared_ptr<Signature> clone() const;

:[Python]:

    .. code-block:: python

        # Returns Sha256WithEcdsaSignature
        def clone(self)

:[Java]:

    .. code-block:: java

        public Object clone()

:Returns:

    A new Sha256WithEcdsaSignature object.
