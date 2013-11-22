.. _Signature:

Signature Class
===============

A Signature is an abstract base class providing methods to work with the signature information in a Data packet. You must create an object of a subclass, for example Sha256WithRsaSignature.

:[C++]:
    Namespace: ``ndn``

:[Python]:
    Module: ``pyndn``

Signature.clone Method
----------------------

Return a pointer to a new Signature which is a copy of this signature. This is abstract, the subclass must implement it.

:[C++]:

.. code-block:: c++

    virtual ptr_lib::shared_ptr<Signature> clone() const = 0;

:Returns:

An now object of a subclass of Signature which is a clone of this object.

Sha256WithRsaSignature Class
============================

A Sha256WithRsaSignature extends Signature and holds the signature bits and other info representing a SHA256-with-RSA signature in a data packet.

:[C++]:
    Namespace: ``ndn``

:[Python]:
    Module: ``pyndn``

Sha256WithRsaSignature Constructor
----------------------------------

Create a new Sha256WithRsaSignature object.

:[C++]:

.. code-block:: c++

    Sha256WithRsaSignature();

Sha256WithRsaSignature.clone Method
-----------------------------------

Return a pointer to a new Sha256WithRsaSignature which is a copy of this signature.

:[C++]:

.. code-block:: c++

    virtual ptr_lib::shared_ptr<Signature> clone() const;

:Returns:

    A new Sha256WithRsaSignature object.
