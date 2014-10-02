.. _Blob:

Blob Class
==========

A Blob holds a pointer to an immutable byte array.  This is like a JavaScript
string which is a pointer to an immutable string.  It is OK to pass a pointer to
the string because the new owner can't change the bytes of the string.  However,
like a JavaScript string, it is possible to change the pointer, and so this does
allow the copy constructor and assignment to change the pointer.  Also remember
that the pointer can be null.

:[C++]:
    | ``#include <ndn-cpp/util/blob.hpp>``
    | Namespace: ``ndn``

    .. code-block:: c++

        class Blob : public ptr_lib::shared_ptr<const std::vector<uint8_t> >

:[Python]:
    Module: ``pyndn.util``

:[Java]:
    Package: ``net.named_data.jndn.util``

Blob Constructors
-----------------

Blob Constructor (from another Blob)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Create a new Blob and take another pointer to the given blob's array without copying.

:[C++]:

    .. code-block:: c++

        Blob(        
            [const Blob& blob]
        );

:[Python]:

    .. code-block:: python
    
        def __init__(self
            [, blob  # Blob]
        )

:[JavaScript]:

    .. code-block:: c++

        var Blob = function Blob(        
            [blob  // Blob]
        )

:[Java]:

    .. code-block:: java
    
        public Blob(
            [Blob blob]
        )

:Parameters:

    - `blob`
        (optional) The Blob from which we take another pointer to the same buffer.
        If omitted, set this Blob to a null pointer.

Blob Constructor (maybe point to an existing byte array)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Create a new Blob with the option to to point to an existing byte array or to
copy it.

IMPORTANT: If copy is false, after calling this constructor, if you keep a 
pointer to the array then you must treat the array as immutable and promise not 
to change it.

:[C++]:

    .. code-block:: c++

        Blob(        
            const ptr_lib::shared_ptr<std::vector<uint8_t> > &value,
            bool copy
        );

        Blob(        
            const ptr_lib::shared_ptr<const std::vector<uint8_t> > &value,
            bool copy        
        );

:[Python]:

    .. code-block:: python
    
        def __init__(self,
            value,  # bytearray, memoryview or other array of int
            copy    # bool
        )

:[JavaScript]:

    .. code-block:: c++

        var Blob = function Blob(        
            value,  // Buffer
            copy    // boolean
        )

:[Java]:

    .. code-block:: java
    
        public Blob(
            ByteBuffer value,
            boolean copy
        )

:Parameters:

    - `value`
        The byte array.

    - `copy`
        If true, copy the value into a new array. Otherwise, take another reference and do not copy the bytes.

Blob Constructor (copy an array)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Create a new Blob with a copy of the given array. This constructor always copies
because the given array is not the right type to store internally in the Blob.

:[C++]:

    .. code-block:: c++

        Blob(        
            const std::vector<uint8_t> &value        
        );

        Blob(        
            const uint8_t* value,
            size_t valueLength        
        );

:[JavaScript]:

    .. code-block:: c++

        var Blob = function Blob(        
            value  // Array<number>
        )

:[Java]:

    .. code-block:: java
    
        public Blob(
            byte[] value
        )
    
        public Blob(
            int[] value
        )

:Parameters:

    - `value`
        A pointer to the byte array which is copied.

    - `valueLength`
        (C++ only) The length of value.

Blob Constructor (from Unicode string)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Create a new Blob from the UTF8 encoding of the Unicode string.

:[Python]:

    .. code-block:: python
    
        def __init__(self,
            value  # unicode (Python 2) or str (Python 3)
        )

:[JavaScript]:

    .. code-block:: c++

        var Blob = function Blob(        
            value  // string
        )

:[Java]:

    .. code-block:: java
    
        public Blob(
            String value
        )

:Parameters:

    - `value`
        The Unicode string which is encoded as UTF8.  
        
        .. note::

            [Python only] In Python 2, only a value of type 'unicode' is encoded 
            as UTF8. A Python 2 'str' is treated as a "raw string" and converted 
            to an array without encoding.

Blob.buf Method
---------------

Return a pointer to the immutable byte array. DO NOT change the contents of the 
array.  If you need to change it, make a copy.

:[C++]:

    .. code-block:: c++

        const uint8_t* buf() const;

:[Python]:

    .. code-block:: python
    
        # Returns an array type with int elements, such as bytearray.
        def buf(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns Buffer
        Blob.prototype.buf = function()

:[Java]:

    .. code-block:: java
    
        public final ByteBuffer buf()

:Returns:

    A pointer to the immutable byte array. If the pointer to the array is null, return null.

Blob.equals Method
------------------

Check if the value of this Blob equals the other blob.

:[C++]:

    .. code-block:: c++

        bool equals(
            const Blob& other
        ) const;

:[Python]:

    .. code-block:: python

        # Returns bool.
        def equals(self,
            other  # Blob
        )

:[JavaScript]:

    .. code-block:: javascript

        // Returns boolean
        Blob.prototype.equals = function(
            other  // Blob
        )

:[Java]:

    .. code-block:: java

        public final boolean equals(
            Blob other
        )

:Parameters:

    - `other`
        The other Blob to check.

:Returns:

    True if this isNull and other isNull or if the bytes of this blob equal the bytes of the other.

.. _isNull:

Blob.isNull Method
------------------

Check if the array pointer is null.

:[C++]:

    .. code-block:: c++

        bool isNull() const;

:[Python]:

    .. code-block:: python
    
        # Returns bool.
        def isNull(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns boolean
        Blob.prototype.isNull = function()

:[Java]:

    .. code-block:: java
    
        public final boolean isNull()

:Returns:

    True if the array pointer is null, otherwise false.

.. _SignedBlob:

Blob.size Method
----------------

Return the length of the immutable byte array.

:[C++]:

    .. code-block:: c++

        size_t size() const;

:[Python]:

    .. code-block:: python
    
        # Returns int
        def size(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns number
        Blob.prototype.size = function()

:[Java]:

    .. code-block:: java
    
        public final int size()

:Returns:

    The length of the array.  If the pointer to the array is null, return 0.

SignedBlob Class
================

A SignedBlob extends Blob to keep the offsets of a signed portion (e.g., the
bytes of Data packet). This inherits from Blob, including Blob.size and Blob.buf.

:[C++]:
    | ``#include <ndn-cpp/util/signed-blob.hpp>``
    | Namespace: ``ndn``

    .. code-block:: c++

        class SignedBlob : public Blob

:[Python]:
    Module: ``pyndn.util``

    .. code-block:: python
    
        class SignedBlob(Blob)

:[Java]:
    Package: ``net.named_data.jndn.util``

    .. code-block:: java
    
        public class SignedBlob extends Blob 

SignedBlob.getSignedPortionBeginOffset Method
---------------------------------------------

Return the offset in the array of the beginning of the signed portion.

:[C++]:

    .. code-block:: c++

        size_t getSignedPortionBeginOffset() const;

:[Python]:

    .. code-block:: python
    
        # Returns int
        def getSignedPortionBeginOffset(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns number
        SignedBlob.prototype.getSignedPortionBeginOffset = function()

:[Java]:

    .. code-block:: java
    
        public final int getSignedPortionBeginOffset()

:Returns:

    The offset of the beginning of the signed portion that was given to the constructor.

SignedBlob.getSignedPortionEndOffset Method
-------------------------------------------

Return the offset in the array of the end of the signed portion.

:[C++]:

    .. code-block:: c++

        size_t getSignedPortionEndOffset() const;

:[Python]:

    .. code-block:: python
    
        # Returns int
        def getSignedPortionEndOffset(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns number
        SignedBlob.prototype.getSignedPortionEndOffset = function()

:[Java]:

    .. code-block:: java
    
        public final int getSignedPortionEndOffset()

:Returns:

    The offset of the end of the signed portion that was given to the constructor.

SignedBlob.signedBuf Method
---------------------------

Return a pointer to the first byte of the signed portion of the immutable byte array.

:[C++]:

    .. code-block:: c++

        const uint8_t* signedBuf() const;

:[Python]:

    .. code-block:: python
    
        # Returns an array type with int elements, such as bytearray.
        def signedBuf(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns Buffer
        SignedBlob.prototype.signedBuf = function()

:[Java]:

    .. code-block:: java
    
        public final ByteBuffer signedBuf()

:Returns:

    A pointer to the first byte of the signed portion.  If the pointer to the array is null, return null.

SignedBlob.signedSize Method
----------------------------

Return the length of the signed portion of the immutable byte array.

:[C++]:

    .. code-block:: c++

        size_t signedSize() const;

:[Python]:

    .. code-block:: python
    
        # Returns int
        def signedSize(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns number
        SignedBlob.prototype.signedSize = function()

:[Java]:

    .. code-block:: java
    
        public final int signedSize()

:Returns:

    The length of the signed portion.  If the pointer to the array is null, return 0.
