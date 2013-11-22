BinaryXmlWireFormat Class
=========================

:[C++]:
    Namespace: `ndn`

BinaryXmlWireFormat Constructor
-------------------------------

Create a BinaryXmlWireFormat which extends the WireFormat interface to implement encoding and decoding in binary XML.

:[C++]:

    .. code-block:: c++

        BinaryXmlWireFormat();

:[JavaScript]:

    .. code-block:: javascript

        var BinaryXmlWireFormat = function BinaryXmlWireFormat()

BinaryXmlWireFormat.decodeData Method
-------------------------------------

Decode the input and Binary XML and put the result in data.

:[C++]:

    .. code-block:: c++

        void decodeData(
        
            Data& data,
            const uint8_t* input,
            size_t inputLength
            [, size_t* signedPortionBeginOffset,
            size_t* signedPortionEndOffset]
        
        );

:[JavaScript]:

    .. code-block:: javascript

        BinaryXmlWireFormat.prototype.decodeContentObject = function(

            contentObject, // ContentObject
            input          // Uint8Array

        )

:Parameters:

    - `data`
        The Data which is set to the values decoded from the input.

    - `input`
        The input byte array to be decoded.

    - `inputLength`
        (C++ only) The length of the input byte array.

    - `signedPortionBeginOffset`
        (optional) Return the offset in the input of the beginning of the signed portion. If you are not decoding in order to verify, you can ignore this returned value.

    - `signedPortionEndOffset`
        (optional) Return the offset in the input of the end of the signed portion. If you are not decoding in order to verify, you can ignore this returned value.

BinaryXmlWireFormat.encodeData Method
-------------------------------------

Encode the data object as Binary XML and return the encoding.

:[C++]:

    .. code-block:: c++

        Blob encodeData(
        
            const Data& data
            [, size_t* signedPortionBeginOffset,
            size_t* signedPortionEndOffset]
        
        );

:[JavaScript]:

    .. code-block:: javascript

        // Returns Uint8Array
        BinaryXmlWireFormat.prototype.encodeContentObject = function(
        
            contentObject, // ContentObject
        
        )

:Parameters:

    - `data`
        The Data object to be encoded.

    - `signedPortionBeginOffset`
        (optional) Return the offset in the encoding of the beginning of the signed portion. If you are not encoding in order to sign, you can ignore this returned value.

    - `signedPortionEndOffset`
        (optional) Return the offset in the encoding of the end of the signed portion. If you are not encoding in order to sign, you can ignore this returned value.

:Returns:

    The encoded byte array.

BinaryXmlWireFormat.decodeInterest Method
-----------------------------------------

Decode the input and Binary XML and put the result in interest.

:[C++]:
    .. code-block:: c++

        void decodeInterest(
        
            Interest& interest,
            const uint8_t* input,
            size_t inputLength
        
        );

:[JavaScript]:

    .. code-block:: javascript

        BinaryXmlWireFormat.prototype.decodeInterest = function(
        
            interest, // Interest
            input // Uint8Array
        
        )

:Parameters:

    - `interest`
        The Interest which is set to the values decoded from the input.

    - `input`
        The input byte array to be decoded.

    - `inputLength`
        (C++ only) The length of the input byte array.

BinaryXmlWireFormat.encodeInterest Method
-----------------------------------------

Encode the interest as Binary XML and return the encoding.

:[C++]:

    .. code-block:: c++

        Blob encodeInterest(

            const Interest& interest,

        );

:[JavaScript]:

    .. code-block:: javascript

        // Returns Uint8Array
        BinaryXmlWireFormat.prototype.encodeContentObject = function(
        
            interest, // Interest
        
        )

:Parameters:

    - `interest`
        The Interest to be encoded.

:Returns:

    The encoded byte array.
