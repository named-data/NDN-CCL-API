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

:[JavaScript]:

    .. code-block:: javascript

        var Signature = function Signature()

:[Java]:

    .. code-block:: java
    
        public Sha256WithRsaSignature()

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

:[Java]:

    .. code-block:: java
    
        public Object clone()

:Returns:

    A new Sha256WithRsaSignature object.
