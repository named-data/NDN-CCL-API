.. _Signature:

Signature Class
===============

A Signature is an abstract base class providing methods to work with the signature information in a Data packet. You must create an object of a subclass, for example Sha256WithRsaSignature.

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

.. _Sha256WithRsaSignature:

Sha256WithRsaSignature Class
============================

A Sha256WithRsaSignature extends Signature and holds the signature bits and other info representing a SHA256-with-RSA signature in a data packet.

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
        Signature.prototype.getKeyLocator = function()

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
        Signature.prototype.getSignature = function()

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

        Signature.prototype.setKeyLocator = function(
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

        Signature.prototype.setSignature = function(
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
        Signature.prototype.clone = function()

:[Java]:

    .. code-block:: java
    
        public Object clone()

:Returns:

    A new Sha256WithRsaSignature object.
