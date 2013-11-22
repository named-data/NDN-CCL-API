.. _Blob:

Blob Class
==========

:[C++]:
    Namespace: ndn

.. code-block:: c++

    class Blob : public ptr_lib::shared_ptr<const std::vector<uint8_t> >

A Blob holds a pointer to an immutable byte array implemented as const std::vector<uint8_t>.  This is like a JavaScript string which is a pointer to an immutable string.  It is OK to pass a pointer to the string because the new owner can't change the bytes of the string.  However, like a JavaScript string, it is possible to change the pointer, and so this does allow the copy constructor and assignment to change the pointer.  Also remember that the pointer can be null.

Blob Constructor
----------------

Create a new Blob to point to an existing byte array.

IMPORTANT: After calling this constructor, if you keep a pointer to the array then you must treat the array as immutable and promise not to change it.

:[C++]:

    .. code-block:: c++

        Blob(
        
            [const ptr_lib::shared_ptr<std::vector<uint8_t> > &value]
        
        );

        Blob(
        
            [const ptr_lib::shared_ptr<const std::vector<uint8_t> > &value]
        
        );

:[JavaScript]:

    .. code-block:: c++

        var Blob = function Blob(
        
            [value // Blob]
        
        )

:Parameters:

    - `value`
        (optional) A pointer to a vector with the byte array.  This takes another reference and does not copy the bytes.  If omitted, this set this blob to a null pointer.

Blob Constructor (``uint8_t *``)
--------------------------------

(C++ only) Create a new Blob with an immutable copy of the given array.

:[C++]:

    .. code-block:: c++

        Blob(
        
            const uint8_t* value,
            size_t valueLength
        
        );

:Parameters:

    - `value`
        A pointer to the byte array which is copied.

    - `valueLength`
        The length of value.

Blob Constructor (copy byte array)
----------------------------------

Create a new Blob with an immutable copy of the array in the given vector. If you want to transfer the array without copying, the the vector has to start as a type for the main Blob constructor.

:[C++]:

    .. code-block:: c++

        Blob(
        
            const std::vector<uint8_t> &value
        
        );

:[JavaScript]:

    .. code-block:: javascript

        var Blob = function Blob(
        
            [value // Buffer|Array<number>]
        
        )

:Parameters:

    - `value`
        A reference to a vector which is copied.

Blob.size Method
----------------

Return the length of the immutable byte array.

:[C++]:

    .. code-block:: c++

        size_t size() const;

:[JavaScript]:

    .. code-block:: javascript

        // Returns number
        Blob.prototype.size = function()

:Returns:

    The length of the array.  If the pointer to the array is null, return 0.

Blob.buf Method
---------------

Return a pointer to the immutable byte array. DO NOT change the contents of the array.  If you need to change it, make a copy.

:[C++]:

    .. code-block:: c++

        const uint8_t* buf() const;

:[JavaScript]:

    .. code-block:: javascript

        // Returns Buffer
        Blob.prototype.buf = function()

:Returns:

    A pointer to the immutable byte array.  If the pointer to the array is null, return null.

.. _SignedBlob:

SignedBlob Class
================

:[C++]:
    Namespace: ndn

.. code-block:: c++

    class SignedBlob : public Blob

A SignedBlob extends Blob to keep the offsets of a signed portion (e.g., the bytes of Data packet). This inherits from Blob, including Blob.size and Blob.buf.

SignedBlob.signedSize Method
----------------------------

Return the length of the signed portion of the immutable byte array.

:[C++]:

    .. code-block:: c++

        size_t signedSize() const;

:[JavaScript]:

    .. code-block:: javascript

        // Returns number
        SignedBlob.prototype.signedSize = function()

:Returns:

    The length of the signed portion.  If the pointer to the array is null, return 0.

SignedBlob.signedBuf Method
---------------------------

Return a pointer to the first byte of the signed portion of the immutable byte array.

:[C++]:

    .. code-block:: c++

        const uint8_t* signedBuf() const;

:[JavaScript]:

    .. code-block:: javascript

        // Returns Buffer
        SignedBlob.prototype.signedBuf = function()

:Returns:

    A pointer to the first byte of the signed portion.  If the pointer to the array is null, return null.

SignedBlob.getSignedPortionBeginOffset Method
---------------------------------------------

Return the offset in the array of the beginning of the signed portion.

:[C++]:

    .. code-block:: c++

        size_t getSignedPortionBeginOffset() const;

:[JavaScript]:

    .. code-block:: javascript

        // Returns number
        SignedBlob.prototype.getSignedPortionBeginOffset = function()

:Returns:

    The offset that was given to the constructor.

SignedBlob.getSignedPortionEndOffset Method
-------------------------------------------

Return the offset in the array of the end of the signed portion.

:[C++]:

    .. code-block:: c++

        size_t getSignedPortionEndOffset() const;

:[JavaScript]:

    .. code-block:: javascript

        // Returns number
        SignedBlob.prototype.getSignedPortionEndOffset = function()

:Returns:

    The offset that was given to the constructor.
