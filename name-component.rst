.. _Name.Component:

Name.Component Class
====================

A Name.Component holds a read-only name component value

:[C++]:
    | ``#include <ndn-cpp/name.hpp>``
    | Namespace: ``ndn``

:[Python]:
    Module: ``pyndn``

:[Java]:
    Package: ``net.named_data.jndn``

Name.Component Constructors
---------------------------

Name.Component Constructor (copy optional byte array)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Create a new Name.Component, optionally copying from the byte array.
(To create an ImplicitSha256Digest component, use
:ref:`fromImplicitSha256Digest <fromImplicitSha256Digest>`.)

:[C++]:

    .. code-block:: c++
    
        Name::Component(
            [const std::vector<uint8_t>& value]
            [, ndn_NameComponentType type]
            [, int otherTypeCode]
        );

:[Python]:

    .. code-block:: python
    
        def __init__(self
            [, value  # bytearray|memoryview|other array of int]
            [, type  # int]
            [, otherTypeCode  # int]
        )

:[JavaScript]:

    .. code-block:: javascript
    
        Name.Component = function NameComponent(
            [value  // Array<number>|ArrayBuffer|Uint8Array]
            [, type  // number]
            [, otherTypeCode  // number]
        )

:[Java]:

    .. code-block:: java
    
        public Component(
            [byte[] value]
            [, ComponentType type]
            [, int otherTypeCode]
        )

:Parameters:

    - `value`
        (optional) The content byte array to copy. If omitted, create a GENERIC
        Component with an empty value.

    - `type`
        (optional) The component enum value which is GENERIC,
        IMPLICIT_SHA256_DIGEST or OTHER_CODE as follows. If the name component
        type is not a enum value, then set this to OTHER_CODE and use the
        otherTypeCode parameter. If omitted, use GENERIC.

            * C++: ``ndn_NameComponentType_GENERIC``, ``ndn_NameComponentType_IMPLICIT_SHA256_DIGEST`` or ``ndn_NameComponentType_OTHER_CODE``
            * Python: ``ComponentType.GENERIC``, ``ComponentType.IMPLICIT_SHA256_DIGEST`` or ``ComponentType.OTHER_CODE``
            * JavaScript: ``ComponentType.GENERIC``, ``ComponentType.IMPLICIT_SHA256_DIGEST`` or ``ComponentType.OTHER_CODE``
            * Java: ``ComponentType.GENERIC``, ``ComponentType.IMPLICIT_SHA256_DIGEST`` or ``ComponentType.OTHER_CODE``

    - `otherTypeCode`
        (optional) If type is OTHER_CODE, then this is the packet's unrecognized
        content type code, which must be non-negative.

Name.Component Constructor (from Unicode string)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Create a new Name.Component, converting the value to UTF8 bytes.  This does not
escape %XX values. If you need to escape, use Name.fromEscapedString.

:[Python]:

    .. code-block:: python
    
         def __init__(self, 
            value  # unicode (Python 2) or str (Python 3)
            [, type  # int]
            [, otherTypeCode  # int]
        )

:[JavaScript]:

    .. code-block:: javascript
    
        Name.Component = function NameComponent(
            value  // string
            [, type  // number]
            [, otherTypeCode  // number]
        )

:[Java]:

    .. code-block:: java
    
        Component(
            String value
            [, ComponentType type]
            [, int otherTypeCode]
        )

:Parameters:

    - `value`
        The Unicode string which is encoded as UTF8.  

    - `type`
        (optional) The component enum value which is GENERIC,
        IMPLICIT_SHA256_DIGEST or OTHER_CODE as follows. If the name component
        type is not a enum value, then set this to OTHER_CODE and use the
        otherTypeCode parameter. If omitted, use GENERIC.

            * Python: ``ComponentType.GENERIC``, ``ComponentType.IMPLICIT_SHA256_DIGEST`` or ``ComponentType.OTHER_CODE``
            * JavaScript: ``ComponentType.GENERIC``, ``ComponentType.IMPLICIT_SHA256_DIGEST`` or ``ComponentType.OTHER_CODE``
            * Java: ``ComponentType.GENERIC``, ``ComponentType.IMPLICIT_SHA256_DIGEST`` or ``ComponentType.OTHER_CODE``

    - `otherTypeCode`
        (optional) If type is OTHER_CODE, then this is the packet's unrecognized
        content type code, which must be non-negative.

        .. note::

            [Python only] In Python 2, only a value of type 'unicode' is encoded 
            as UTF8. A Python 2 'str' is treated as a "raw string" and converted 
            to an array without encoding.

Name.Component Constructor (from Blob)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Create a new Name.Component, taking another pointer to the byte array in the Blob.
(To create an ImplicitSha256Digest component, use
:ref:`fromImplicitSha256Digest <fromImplicitSha256Digest>`.)

:[C++]:

    .. code-block:: c++
    
        Name::Component(
            const Blob& value
            [, ndn_NameComponentType type]
            [, int otherTypeCode]
        );

:[Python]:

    .. code-block:: python
    
         def __init__(self, 
            value  # Blob
            [, type  # int]
            [, otherTypeCode  # int]
        )

:[JavaScript]:

    .. code-block:: javascript
    
        Name.Component = function NameComponent(
            value  // Blob
            [, type  // number]
            [, otherTypeCode  // number]
        )

:[Java]:

    .. code-block:: java
    
        Component(
            Blob value
            [, ComponentType type]
            [, int otherTypeCode]
        )

:Parameters:

    - `value`
        The Blob with the pointer to the byte array.

    - `type`
        (optional) The component enum value which is GENERIC,
        IMPLICIT_SHA256_DIGEST or OTHER_CODE as follows. If the name component
        type is not a enum value, then set this to OTHER_CODE and use the
        otherTypeCode parameter. If omitted, use GENERIC.

            * C++: ``ndn_NameComponentType_GENERIC``, ``ndn_NameComponentType_IMPLICIT_SHA256_DIGEST`` or ``ndn_NameComponentType_OTHER_CODE``
            * Python: ``ComponentType.GENERIC``, ``ComponentType.IMPLICIT_SHA256_DIGEST`` or ``ComponentType.OTHER_CODE``
            * JavaScript: ``ComponentType.GENERIC``, ``ComponentType.IMPLICIT_SHA256_DIGEST`` or ``ComponentType.OTHER_CODE``
            * Java: ``ComponentType.GENERIC``, ``ComponentType.IMPLICIT_SHA256_DIGEST`` or ``ComponentType.OTHER_CODE``

    - `otherTypeCode`
        (optional) If type is OTHER_CODE, then this is the packet's unrecognized
        content type code, which must be non-negative.

Name.Component Constructor (from Component)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Create a new Name.Component, taking another pointer to the component's value.

:[C++]:

    .. code-block:: c++
    
        Name::Component(
            const Name::Component& component
        );

:[Python]:

    .. code-block:: python
    
        def __init__(self, 
            component  # Name.Component
        )

:[JavaScript]:

    .. code-block:: javascript
    
        Name.Component = function NameComponent(
            component  // Name.Component
        )

:[Java]:

    .. code-block:: java
    
        Component(
            Component component
        )

:Parameters:

    - `component`
        The Name.Component to copy.

Name.Component.compare Method
-----------------------------

Compare this to the other Component using NDN canonical ordering.

See http://named-data.net/doc/0.2/technical/CanonicalOrder.html

:[C++]:

    .. code-block:: c++

        int compare(
            const Name::Component& other
        ) const;

:[Python]:

    .. code-block:: python

        # Returns int
        def compare(self,
            other  # Name.Component
        )

:[JavaScript]:

    .. code-block:: javascript

        // Returns number
        Name.Component.prototype.compare = function(
            other  // Name.Component
        )

:[Java]:

    .. code-block:: java

        public final int other(
            Name.Component other
        )

:Parameters:

    - `other`
        The other Component to compare with.

:Returns:

    0 If they compare equal, -1 if this Name.Component comes before other in the
    canonical ordering, or 1 if this Name.Component comes after other in the
    canonical ordering.

Name.Component.equals Method
----------------------------

Check if this is the same component as other.

:[C++]:

    .. code-block:: c++

        bool equals(
            const Component& other
        ) const;

:[Python]:

    .. code-block:: python

        # Returns bool
        def equals(self,
            other  # Name.Component
        )

:[JavaScript]:

    .. code-block:: javascript

        // Returns boolean
        Name.Component.prototype.equals = function(
            other  // Name.Component
        )

:[Java]:

    .. code-block:: java

        public boolean equals(
            Name.Component other
        )

:Parameters:

    - other
        The other Component to compare with.

:Returns:

    True if the components are not equal, otherwise false.

.. _fromImplicitSha256Digest:

Name.Component.fromImplicitSha256Digest Method
----------------------------------------------

Create a component of type ImplicitSha256DigestComponent, so that
:ref:`isImplicitSha256Digest() <isImplicitSha256Digest>` is true.

:[C++]:

    .. code-block:: c++

        static Component fromImplicitSha256Digest(
            const Blob& digest
        );

        static Component fromImplicitSha256Digest(
            const uint8_t *digest,
            size_t digestLength
        );

        static Component fromImplicitSha256Digest(
            const std::vector<uint8_t>& digest
        );

:[Python]:

    .. code-block:: python

        # Returns Name.Component
        @staticmethod
        def fromImplicitSha256Digest(
            digest  # Blob or value for Blob constructor
        )

:[JavaScript]:

    .. code-block:: javascript

        // Returns Name.Component
        Name.Component.fromImplicitSha256Digest = function(
            digest  // Blob|Buffer
        )

:[Java]:

    .. code-block:: java

        public static Component fromImplicitSha256Digest(
            Blob digest
        )

        public static Component fromImplicitSha256Digest(
            byte[] digest
        )

:Parameters:

    - `digest`
        The SHA-256 digest value.

:Returns:

    The new component.

:Throw:

    Throw an exception if the digest length is not 32 bytes.

.. _Name.Component.getOtherTypeCode:

Name.Component.getOtherTypeCode Method
--------------------------------------

Get the name component type code from the packet which is other than a recognized
ComponentType enum value. This is only meaningful if
:ref:`getType() <Name.Component.getType>` is OTHER_CODE.

:[C++]:

    .. code-block:: c++

        int getOtherTypeCode() const;

:[Python]:

    .. code-block:: python

        # Returns int
        def getOtherTypeCode(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns number
        Name.Component.prototype.getOtherTypeCode = function()

:[Java]:

    .. code-block:: java

        public final int getOtherTypeCode()

:Returns:

    The type code.

Name.Component.getSuccessor Method
----------------------------------

Get the successor of this component, as described in :ref:`Name.getSuccessor <Name.getSuccessor>`.

:[C++]:

    .. code-block:: c++

        Component getSuccessor() const;

:[Python]:

    .. code-block:: python

        # Returns Name.Component
        def getSuccessor(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns Name.Component
        Name.Component.prototype.getSuccessor = function()

:[Java]:

    .. code-block:: java

        public final Component getSuccessor()

:Returns:

    A new Name.Component which is the successor of this.

.. _Name.Component.getType:

Name.Component.getType Method
-----------------------------

Get the name component type.

:[C++]:

    .. code-block:: c++

        ndn_NameComponentType getType() const;

:[Python]:

    .. code-block:: python

        # Returns int
        def getType(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns number
        MetaInfo.prototype.getType = function()

:[Java]:

    .. code-block:: java

        public final ComponentType getType()

:Returns:

    The name component type enum value which is GENERIC, IMPLICIT_SHA256_DIGEST
    or OTHER_CODE as follows. If this is OTHER_CODE, then call
    :ref:`getOtherTypeCode() <Name.Component.getOtherTypeCode>` to get the
    unrecognized component type code.

        * C++: ``ndn_NameComponentType_GENERIC``, ``ndn_NameComponentType_IMPLICIT_SHA256_DIGEST`` or ``ndn_NameComponentType_OTHER_CODE``
        * Python: ``ComponentType.GENERIC``, ``ComponentType.IMPLICIT_SHA256_DIGEST`` or ``ComponentType.OTHER_CODE``
        * JavaScript: ``ComponentType.GENERIC``, ``ComponentType.IMPLICIT_SHA256_DIGEST`` or ``ComponentType.OTHER_CODE``
        * Java: ``ComponentType.GENERIC``, ``ComponentType.IMPLICIT_SHA256_DIGEST`` or ``ComponentType.OTHER_CODE``

Name.Component.getValue Method
------------------------------

Get the value of the component.

:[C++]:

    .. code-block:: c++
    
        const Blob& getValue() const;

:[Python]:

    .. code-block:: python
    
        # Returns Blob
        def getValue(self)

:[JavaScript]:

    .. code-block:: javascript
    
        // Returns Blob
        Name.Component.prototype.getValue = function()

:[Java]:

    .. code-block:: java
    
        public final Blob getValue()

:Returns:

    The component value.

Name.Component.isGeneric Method
-------------------------------

Check if this component is a generic component.

:[C++]:

    .. code-block:: c++

        bool isGeneric() const;

:[Python]:

    .. code-block:: python

        # Returns bool
        def isGeneric(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns boolean
        Name.Component.prototype.isGeneric = function()

:[Java]:

    .. code-block:: java

        public final boolean isGeneric()

:Returns:

    True if this is an generic component.

.. _isImplicitSha256Digest:

Name.Component.isImplicitSha256Digest Method
--------------------------------------------

Check if this component is an ImplicitSha256Digest component.

:[C++]:

    .. code-block:: c++

        bool isImplicitSha256Digest() const;

:[Python]:

    .. code-block:: python

        # Returns bool
        def isImplicitSha256Digest(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns boolean
        Name.Component.prototype.isImplicitSha256Digest = function()

:[Java]:

    .. code-block:: java

        public final boolean isImplicitSha256Digest()

:Returns:

    True if this is an ImplicitSha256Digest component.

Name.Component.toEscapedString Method
-------------------------------------

Convert this component value by escaping characters according to the NDN URI Scheme.
This also adds "..." to a value with zero or more ".".
This adds a type code prefix as needed, such as "sha256digest=".

:[C++]:

    .. code-block:: c++

        std::string toEscapedString() const;

:[Python]:

    .. code-block:: python

        # Returns str
        def toEscapedString(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns string
        Name.Component.prototype.toEscapedString = function()

:[Java]:

    .. code-block:: java

        public final String toEscapedString()

:Returns:

    The escaped string.

Name.Component From Naming Convention Value Methods
---------------------------------------------------

Name.Component.fromNumber Method
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Create a component whose value is the nonNegativeInteger encoding of the number.
A nonNegativeInteger is always encoded as 1, 2, 4 or 8 bytes.

:[C++]:

    .. code-block:: c++

        static Component fromNumber(
            uint64_t number
            [, ndn_NameComponentType type]
            [, int otherTypeCode]
        );

:[Python]:

    .. code-block:: python

        # Returns Name.Component
        @staticmethod
        def fromNumber(
            number  # int
            [, type  # int]
            [, otherTypeCode  # int]
        )

:[JavaScript]:

    .. code-block:: javascript

        // Returns Name.Component
        Name.Component.fromNumber = function(
            number  // number
            [, type  // number]
            [, otherTypeCode  // number]
        )

:[Java]:

    .. code-block:: java

        public static Component fromNumber(
            long number
            [, ComponentType type]
            [, int otherTypeCode]
        )

:Parameters:

    - `number`
        The number to be encoded.

    - `type`
        (optional) The component enum value which is GENERIC,
        IMPLICIT_SHA256_DIGEST or OTHER_CODE as follows. If the name component
        type is not a enum value, then set this to OTHER_CODE and use the
        otherTypeCode parameter. If omitted, use GENERIC.

            * C++: ``ndn_NameComponentType_GENERIC``, ``ndn_NameComponentType_IMPLICIT_SHA256_DIGEST`` or ``ndn_NameComponentType_OTHER_CODE``
            * Python: ``ComponentType.GENERIC``, ``ComponentType.IMPLICIT_SHA256_DIGEST`` or ``ComponentType.OTHER_CODE``
            * JavaScript: ``ComponentType.GENERIC``, ``ComponentType.IMPLICIT_SHA256_DIGEST`` or ``ComponentType.OTHER_CODE``
            * Java: ``ComponentType.GENERIC``, ``ComponentType.IMPLICIT_SHA256_DIGEST`` or ``ComponentType.OTHER_CODE``

    - `otherTypeCode`
        (optional) If type is OTHER_CODE, then this is the packet's unrecognized
        content type code, which must be non-negative.

:Returns:

    The new component.

Name.Component.fromNumberWithMarker Method
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Create a component whose value is the marker appended with the nonNegativeInteger
encoding of the number. This is a static method.
A nonNegativeInteger is always encoded as 1, 2, 4 or 8 bytes.

:[C++]:

    .. code-block:: c++

        static Component fromNumberWithMarker(
            uint64_t number,
            uint8_t marker
        );

:[Python]:

    .. code-block:: python

        # Returns Name.Component
        @staticmethod
        def fromNumberWithMarker(
            number,  # int
            marker   # int
        )

:[JavaScript]:

    .. code-block:: javascript

        // Returns Name.Component
        Name.Component.fromNumberWithMarker = function(
            number,  // number
            marker   // number
        )

:[Java]:

    .. code-block:: java

        public static Component fromNumberWithMarker(
            long number,
            int marker
        )

:Parameters:

    - `number`
        The number to be encoded.

    - `marker`
        The marker to use as the first byte of the component.

:Returns:

    The new component.

Name.Component.fromSegment Method
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Create a component with the encoded segment number according to NDN naming
conventions for "Segment number" (marker 0x00).
http://named-data.net/doc/tech-memos/naming-conventions.pdf

:[C++]:

    .. code-block:: c++

        static Component fromSegment(
            uint64_t segment
        );

:[Python]:

    .. code-block:: python

        # Returns Name.Component
        @staticmethod
        def fromSegment(
            segment  # int
        )

:[JavaScript]:

    .. code-block:: javascript

        // Returns Name.Component
        Name.Component.fromSegment = function(
            segment  // number
        )

:[Java]:

    .. code-block:: java

        public static Component fromSegment(
            long segment
        )

:Parameters:

    - `segment`
        The integer segment number.

:Returns:

    The new component.

Name.Component.fromSegmentOffset Method
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Create a component with the encoded segment byte offset according to NDN naming
conventions for segment "Byte offset" (marker 0xFB).
http://named-data.net/doc/tech-memos/naming-conventions.pdf

:[C++]:

    .. code-block:: c++

        static Component fromSegmentOffset(
            uint64_t segmentOffset
        );

:[Python]:

    .. code-block:: python

        # Returns Name.Component
        @staticmethod
        def fromSegmentOffset(
            segmentOffset  # int
        )

:[JavaScript]:

    .. code-block:: javascript

        // Returns Name.Component
        Name.Component.fromSegmentOffset = function(
            segmentOffset  // number
        )

:[Java]:

    .. code-block:: java

        public static Component fromSegmentOffset(
            long segmentOffset
        )

:Parameters:

    - `segmentOffset`
        The integer segment byte offset.

:Returns:

    The new component.

Name.Component.fromSequenceNumber Method
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Create a component with the encoded sequence number according to NDN naming
conventions for "Sequencing" (marker 0xFE).
http://named-data.net/doc/tech-memos/naming-conventions.pdf

:[C++]:

    .. code-block:: c++

        static Component fromSequenceNumber(
            uint64_t segmentOffset
        );

:[Python]:

    .. code-block:: python

        # Returns Name.Component
        @staticmethod
        def fromSequenceNumber(
            segmentOffset  # int
        )

:[JavaScript]:

    .. code-block:: javascript

        // Returns Name.Component
        Name.Component.fromSequenceNumber = function(
            segmentOffset  // number
        )

:[Java]:

    .. code-block:: java

        public static Component fromSequenceNumber(
            long segmentOffset
        )

:Parameters:

    - `segmentOffset`
        The integer sequence number.

:Returns:

    The new component.

Name.Component.fromTimestamp Method
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Create a component with the encoded timestamp  according to NDN naming
conventions for "Timestamp" (marker 0xFC).
http://named-data.net/doc/tech-memos/naming-conventions.pdf

:[C++]:

    .. code-block:: c++

        static Component fromTimestamp(
            uint64_t timestamp
        );

:[Python]:

    .. code-block:: python

        # Returns Name.Component
        @staticmethod
        def fromTimestamp(
            timestamp  # int
        )

:[JavaScript]:

    .. code-block:: javascript

        // Returns Name.Component
        Name.Component.fromTimestamp = function(
            timestamp  // number
        )

:[Java]:

    .. code-block:: java

        public static Component fromTimestamp(
            long timestamp
        )

:Parameters:

    - `timestamp`
        The number of microseconds since the UNIX epoch (Thursday, 1 January 1970)
        not counting leap seconds.

:Returns:

    The new component.

Name.Component.fromVersion Method
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Create a component with the encoded version number  according to NDN naming
conventions for "Versioning" (marker 0xFD). Note that this encodes the exact
value of version without converting from a time representation.
http://named-data.net/doc/tech-memos/naming-conventions.pdf

:[C++]:

    .. code-block:: c++

        static Component fromVersion(
            uint64_t version
        );

:[Python]:

    .. code-block:: python

        # Returns Name.Component
        @staticmethod
        def fromVersion(
            version  # int
        )

:[JavaScript]:

    .. code-block:: javascript

        // Returns Name.Component
        Name.Component.fromVersion = function(
            version  // number
        )

:[Java]:

    .. code-block:: java

        public static Component fromVersion(
            long version
        )

:Parameters:

    - `version`
        The integer version number.

:Returns:

    The new component.

Name.Component Is Naming Convention Value Methods
-------------------------------------------------

Name.Component.isSegment Method
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Check if this name component is a segment number according to NDN naming
conventions for "Segment number" (marker 0x00).
http://named-data.net/doc/tech-memos/naming-conventions.pdf

:[C++]:

    .. code-block:: c++

        bool isSegment() const;

:[Python]:

    .. code-block:: python

        # Returns bool
        def isSegment(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns boolean
        Name.Component.prototype.isSegment = function()

:[Java]:

    .. code-block:: java

        public final boolean isSegment()

:Returns:

    True if this is a segment number.

Name.Component.isSegmentOffset Method
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Check if this name component is a segment byte offset according to NDN naming
conventions for segment "Byte offset" (marker 0xFB).
http://named-data.net/doc/tech-memos/naming-conventions.pdf

:[C++]:

    .. code-block:: c++

        bool isSegmentOffset() const;

:[Python]:

    .. code-block:: python

        # Returns bool
        def isSegmentOffset(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns boolean
        Name.Component.prototype.isSegmentOffset = function()

:[Java]:

    .. code-block:: java

        public final boolean isSegmentOffset()

:Returns:

    True if this is a segment byte offset.

Name.Component.isSequenceNumber Method
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Check if this name component is a sequence number according to NDN naming
conventions for "Sequencing" (marker 0xFE).
http://named-data.net/doc/tech-memos/naming-conventions.pdf

:[C++]:

    .. code-block:: c++

        bool isSequenceNumber() const;

:[Python]:

    .. code-block:: python

        # Returns bool
        def isSequenceNumber(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns boolean
        Name.Component.prototype.isSequenceNumber = function()

:[Java]:

    .. code-block:: java

        public final boolean isSequenceNumber()

:Returns:

    True if this is a sequence number.

Name.Component.isTimestamp Method
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Check if this name component is a timestamp  according to NDN naming
conventions for "Timestamp" (marker 0xFC).
http://named-data.net/doc/tech-memos/naming-conventions.pdf

:[C++]:

    .. code-block:: c++

        bool isTimestamp() const;

:[Python]:

    .. code-block:: python

        # Returns bool
        def isTimestamp(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns boolean
        Name.Component.prototype.isTimestamp = function()

:[Java]:

    .. code-block:: java

        public final boolean isTimestamp()

:Returns:

    True if this is a timestamp.

Name.Component.isVersion Method
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Check if this name component is a version number  according to NDN naming
conventions for "Versioning" (marker 0xFD).
http://named-data.net/doc/tech-memos/naming-conventions.pdf

:[C++]:

    .. code-block:: c++

        bool isVersion() const;

:[Python]:

    .. code-block:: python

        # Returns bool
        def isVersion(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns boolean
        Name.Component.prototype.isVersion = function()

:[Java]:

    .. code-block:: java

        public final boolean isVersion()

:Returns:

    True if this is a version number.

Name.Component To Naming Convention Value Methods
-------------------------------------------------

Name.Component.toNumber Method
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Interpret this name component as a network-ordered number and return an integer.

:[C++]:

    .. code-block:: c++
    
        uint64_t toNumber() const;

:[Python]:

    .. code-block:: python
    
        # Returns int
        def toNumber(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns number
        Name.Component.prototype.toNumber = function()

:[Java]:

    .. code-block:: java
    
        public final long toNumber()

:Returns:

    The integer number.

Name.Component.toNumberWithMarker Method
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Interpret this name component as a network-ordered number with a 
marker and return an integer.

:[C++]:

    .. code-block:: c++
    
        uint64_t toNumberWithMarker(
            uint8_t marker
        ) const;

:[Python]:

    .. code-block:: python
    
        # Returns int
        def toNumberWithMarker(self,
            marker  # int
        )

:[JavaScript]:

    .. code-block:: javascript

        // Returns number
        Name.Component.prototype.toNumberWithMarker = function(
            marker  // number
        )

:[Java]:

    .. code-block:: java
    
        public final long toNumberWithMarker(
            int marker
        )

:Parameters:

    - `marker`
        The required first byte of the component.

:Returns:

    The integer number.

:Throw:

    Throw an exception if the first byte of the component does not equal the marker.

Name.Component.toSegment Method
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Interpret this name component as a segment number according to NDN naming
conventions for "Segment number" (marker 0x00).
http://named-data.net/doc/tech-memos/naming-conventions.pdf

:[C++]:

    .. code-block:: c++
    
        uint64_t toSegment() const;

:[Python]:

    .. code-block:: python
    
        # Returns int
        def toSegment(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns number
        Name.Component.prototype.toSegment = function()

:[Java]:

    .. code-block:: java
    
        public final long toSegment()

:Returns:

    The integer segment number.

:Throw:

    Throw an exception if the first byte of the component is not the expected marker.

Name.Component.toSegmentOffset Method
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Interpret this name component as a segment byte offset according to NDN naming
conventions for segment "Byte offset" (marker 0xFB).
http://named-data.net/doc/tech-memos/naming-conventions.pdf

:[C++]:

    .. code-block:: c++

        uint64_t toSegmentOffset() const;

:[Python]:

    .. code-block:: python

        # Returns int
        def toSegmentOffset(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns number
        Name.Component.prototype.toSegmentOffset = function()

:[Java]:

    .. code-block:: java

        public final long toSegmentOffset()

:Returns:

    The integer segment byte offset.

:Throw:

    Throw an exception if the first byte of the component is not the expected marker.

Name.Component.toSequenceNumber Method
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Interpret this name component as a sequence number according to NDN naming
conventions for "Sequencing" (marker 0xFE).
http://named-data.net/doc/tech-memos/naming-conventions.pdf

:[C++]:

    .. code-block:: c++

        uint64_t toSequenceNumber() const;

:[Python]:

    .. code-block:: python

        # Returns int
        def toSequenceNumber(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns number
        Name.Component.prototype.toSequenceNumber = function()

:[Java]:

    .. code-block:: java

        public final long toSequenceNumber()

:Returns:

    The integer sequence number.

:Throw:

    Throw an exception if the first byte of the component is not the expected marker.

Name.Component.toTimestamp Method
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Interpret this name component as a timestamp  according to NDN naming
conventions for "Timestamp" (marker 0xFC).
http://named-data.net/doc/tech-memos/naming-conventions.pdf

:[C++]:

    .. code-block:: c++

        uint64_t toTimestamp() const;

:[Python]:

    .. code-block:: python

        # Returns int
        def toTimestamp(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns number
        Name.Component.prototype.toTimestamp = function()

:[Java]:

    .. code-block:: java

        public final long toTimestamp()

:Returns:

    The number of microseconds since the UNIX epoch (Thursday, 1 January 1970)
    not counting leap seconds.

:Throw:

    Throw an exception if the first byte of the component is not the expected marker.

Name.Component.toVersion Method
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Interpret this name component as a version number  according to NDN naming
conventions for "Versioning" (marker 0xFD). Note that this returns
the exact number from the component without converting it to a time
representation.
http://named-data.net/doc/tech-memos/naming-conventions.pdf

:[C++]:

    .. code-block:: c++
    
        uint64_t toVersion() const;

:[Python]:

    .. code-block:: python
    
        # Returns int
        def toVersion(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns number
        Name.Component.prototype.toVersion = function()

:[Java]:

    .. code-block:: java
    
        public final long toVersion()

:Returns:

    The integer version number.

:Throw:

    Throw an exception if the first byte of the component is not the expected marker.
