.. _Name:

Name Class
==========

A Name holds an array of Name.Component and represents an NDN name.

:[C++]:
    | ``#include <ndn-cpp/name.hpp>``
    | Namespace: ``ndn``

:[Python]:
    Module: ``pyndn``

:[Java]:
    Package: ``net.named_data.jndn``

Name Constructors
-----------------

Name Constructor (array of components)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Create a new Name with the optional components.

:[C++]:

    .. code-block:: c++
    
        Name(
            [const std::vector<Name::Component>& components]
        );

:[JavaScript]:

    .. code-block:: javascript
    
        var Name = function Name(
            [components  // Array<Uint8Array>]    
        )

:[Java]:

    .. code-block:: java
    
        public Name(
            [ArrayList components]
        )

    .. code-block:: java
    
        public Name(
            [Component[] components]
        )
    
:Parameters:

    - `components`
        (optional) The array of :ref:`name components <Name.Component>`. If omitted, create an empty Name.

Name Constructor (from URI)
^^^^^^^^^^^^^^^^^^^^^^^^^^^

Parse the uri according to the NDN URI Scheme and create the Name with the components.

:[C++]:

    .. code-block:: c++
    
        Name(
            const char* uri
        );

:[Python]:

    .. code-block:: python
    
        def __init__(self,
            uri  # str
        )

:[JavaScript]:

    .. code-block:: javascript
    
        var Name = function Name(
            uri  // string
        )

:[Java]:

    .. code-block:: java
    
        public Name(
            String uri
        )

:Parameters:

    - `uri`
        The URI in the NDN URI Scheme.

Name Constructor (copy)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Create a new Name as a deep copy of the given name.

:[C++]:

    .. code-block:: c++

        Name(
            const Name& name
        );

:[Python]:

    .. code-block:: python
    
        def __init__(self,
            name  # Name
        )

:[JavaScript]:

    .. code-block:: javascript

        var Name = function Name(
            name  // Name
        )

:[Java]:

    .. code-block:: java
    
        public Name(
            Name name
        )

:Parameters:

    - `name`
        The Name to copy.

Name.append Methods
-------------------

Name.append Method (copy byte array)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Append a new component, copying from the byte array.
(To append an ImplicitSha256Digest component, use
:ref:`appendImplicitSha256Digest <appendImplicitSha256Digest>`.)
(To append a ParametersSha256Digest component, use
:ref:`appendParametersSha256Digest <appendParametersSha256Digest>`.)

:[C++]:

    .. code-block:: c++
    
        Name& append(
            const std::vector<uint8_t>& value
            [, ndn_NameComponentType type]
            [, int otherTypeCode]
        );

:[Python]:

    .. code-block:: python
    
        # Returns Name
        def append(self, 
            value  # bytearray|memoryview|other array of int
            [, type  # int]
            [, otherTypeCode  # int]
        )

:[JavaScript]:

    .. code-block:: javascript
    
        // Returns Name
        Name.prototype.append = function(
            value  // Array<number>|ArrayBuffer|Uint8Array
            [, type  // number]
            [, otherTypeCode  // number]
        )

:[Java]:

    .. code-block:: java
    
        public final Name append(
            byte[] value
            [, ComponentType type]
            [, int otherTypeCode]
        )

:Parameters:

    - `value`
        The component byte array to copy.

    - `type`
        (optional) The component enum value which is GENERIC, IMPLICIT_SHA256_DIGEST,
        PARAMETERS_SHA256_DIGEST or OTHER_CODE as follows. If the name component
        type is not a enum value, then set this to OTHER_CODE and use the
        otherTypeCode parameter. If omitted, use GENERIC.

            * C++: ``ndn_NameComponentType_GENERIC``, ``ndn_NameComponentType_IMPLICIT_SHA256_DIGEST``, ``ndn_NameComponentType_PARAMETERS_SHA256_DIGEST`` or ``ndn_NameComponentType_OTHER_CODE``
            * Python: ``ComponentType.GENERIC``, ``ComponentType.IMPLICIT_SHA256_DIGEST``, ``ComponentType.PARAMETERS_SHA256_DIGEST`` or ``ComponentType.OTHER_CODE``
            * JavaScript: ``ComponentType.GENERIC``, ``ComponentType.IMPLICIT_SHA256_DIGEST``, ``ComponentType.PARAMETERS_SHA256_DIGEST`` or ``ComponentType.OTHER_CODE``
            * Java: ``ComponentType.GENERIC``, ``ComponentType.IMPLICIT_SHA256_DIGEST``, ``ComponentType.PARAMETERS_SHA256_DIGEST`` or ``ComponentType.OTHER_CODE``

    - `otherTypeCode`
        (optional) If type is OTHER_CODE, then this is the packet's unrecognized
        content type code, which must be non-negative.

:Returns:

    This name so that you can chain calls to append.

Name.append Method (from Unicode string)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Convert the value to UTF8 bytes and append a Name.Component.  This does not
escape %XX values. If you need to escape, use Name.fromEscapedString. Also, if 
the string has "/", this does not split into separate components. If you need 
to split into separate components, create a new Name using the from URI
constructor, and use append from Name.

:[Python]:

    .. code-block:: python
    
        # Returns Name
        def append(self, 
            value  # unicode (Python 2) or str (Python 3)
            [, type  # int]
            [, otherTypeCode  # int]
        )

:[JavaScript]:

    .. code-block:: javascript
    
        // Returns Name
        Name.prototype.append = function(
            value  // string
            [, type  // number]
            [, otherTypeCode  // number]
        )

:[Java]:

    .. code-block:: java
    
        public final Name append(
            String value
            [, ComponentType type]
            [, int otherTypeCode]
        )

:Parameters:

    - `value`
        The Unicode string which is encoded as UTF8.  

    - `type`
        (optional) The component enum value which is GENERIC, IMPLICIT_SHA256_DIGEST,
        PARAMETERS_SHA256_DIGEST or OTHER_CODE as follows. If the name component
        type is not a enum value, then set this to OTHER_CODE and use the
        otherTypeCode parameter. If omitted, use GENERIC.

            * Python: ``ComponentType.GENERIC``, ``ComponentType.IMPLICIT_SHA256_DIGEST``, ``ComponentType.PARAMETERS_SHA256_DIGEST`` or ``ComponentType.OTHER_CODE``
            * JavaScript: ``ComponentType.GENERIC``, ``ComponentType.IMPLICIT_SHA256_DIGEST``, ``ComponentType.PARAMETERS_SHA256_DIGEST`` or ``ComponentType.OTHER_CODE``
            * Java: ``ComponentType.GENERIC``, ``ComponentType.IMPLICIT_SHA256_DIGEST``, ``ComponentType.PARAMETERS_SHA256_DIGEST`` or ``ComponentType.OTHER_CODE``

    - `otherTypeCode`
        (optional) If type is OTHER_CODE, then this is the packet's unrecognized
        content type code, which must be non-negative.

        .. note::

            [Python only] In Python 2, only a value of type 'unicode' is encoded 
            as UTF8. A Python 2 'str' is treated as a "raw string" and converted 
            to an array without encoding.

:Returns:

    This name so that you can chain calls to append.

Name.append Method (from Blob)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Append a new component, taking another pointer to the byte array in the Blob.
(To append an ImplicitSha256Digest component, use
:ref:`appendImplicitSha256Digest <appendImplicitSha256Digest>`.)
(To append a ParametersSha256Digest component, use
:ref:`appendParametersSha256Digest <appendParametersSha256Digest>`.)

:[C++]:

    .. code-block:: c++
    
        Name& append(
            const Blob& value
            [, ndn_NameComponentType type]
            [, int otherTypeCode]
        );

:[Python]:

    .. code-block:: python
    
        # Returns Name
        def append(self, 
            value  # Blob
            [, type  # int]
            [, otherTypeCode  # int]
        )

:[JavaScript]:

    .. code-block:: javascript
    
        // Returns Name
        Name.prototype.append = function(
            value  // Blob
            [, type  // number]
            [, otherTypeCode  // number]
        )

:[Java]:

    .. code-block:: java
    
        public final Name append(
            Blob value
            [, ComponentType type]
            [, int otherTypeCode]
        )

:Parameters:

    - `value`
        The Blob with the pointer to the byte array.

    - `type`
        (optional) The component enum value which is GENERIC, IMPLICIT_SHA256_DIGEST,
        PARAMETERS_SHA256_DIGEST or OTHER_CODE as follows. If the name component
        type is not a enum value, then set this to OTHER_CODE and use the
        otherTypeCode parameter. If omitted, use GENERIC.

            * C++: ``ndn_NameComponentType_GENERIC``, ``ndn_NameComponentType_IMPLICIT_SHA256_DIGEST``, ``ndn_NameComponentType_PARAMETERS_SHA256_DIGEST`` or ``ndn_NameComponentType_OTHER_CODE``
            * Python: ``ComponentType.GENERIC``, ``ComponentType.IMPLICIT_SHA256_DIGEST``, ``ComponentType.PARAMETERS_SHA256_DIGEST`` or ``ComponentType.OTHER_CODE``
            * JavaScript: ``ComponentType.GENERIC``, ``ComponentType.IMPLICIT_SHA256_DIGEST``, ``ComponentType.PARAMETERS_SHA256_DIGEST`` or ``ComponentType.OTHER_CODE``
            * Java: ``ComponentType.GENERIC``, ``ComponentType.IMPLICIT_SHA256_DIGEST``, ``ComponentType.PARAMETERS_SHA256_DIGEST`` or ``ComponentType.OTHER_CODE``

    - `otherTypeCode`
        (optional) If type is OTHER_CODE, then this is the packet's unrecognized
        content type code, which must be non-negative.

:Returns:

    This name so that you can chain calls to append.

Name.append Method (from Component)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Append the component to this name.

:[C++]:

    .. code-block:: c++
    
        Name& append(
            const Name::Component& value
        );

:[Python]:

    .. code-block:: python
    
        # Returns Name
        def append(self, 
            value  # Name.Component
        )

:[JavaScript]:

    .. code-block:: javascript
    
        // Returns Name
        Name.prototype.append = function(
            value  // Name.Component
        )

:[Java]:

    .. code-block:: java
    
        public final Name append(
            Component value
        )

:Parameters:

    - `value`
        The Name.Component to append.

:Returns:

    This name so that you can chain calls to append.

Name.append Method (from Name)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Append the components of the given name to this name.

:[C++]:

    .. code-block:: c++
    
        Name& append(
            const Name& name
        );

:[Python]:

    .. code-block:: python
    
        # Returns Name
        def append(self, 
            name  # Name
        )

:[JavaScript]:

    .. code-block:: javascript
    
        // Returns Name
        Name.prototype.append = function(
            name  // Name
        )

:[Java]:

    .. code-block:: java
    
        public final Name append(
            Name name
        )

:Parameters:

    - `name`
        The Name with components to append.

:Returns:

    This name so that you can chain calls to append.

.. _appendImplicitSha256Digest:

Name.appendImplicitSha256Digest Method
--------------------------------------

Append a component of type ImplicitSha256DigestComponent, so that
:ref:`isImplicitSha256Digest() <isImplicitSha256Digest>` is true.

:[C++]:

    .. code-block:: c++

        Name& appendImplicitSha256Digest(
            const Blob& digest
        );

        Name& appendImplicitSha256Digest(
            const uint8_t *digest,
            size_t digestLength
        );

        Name& appendImplicitSha256Digest(
            const std::vector<uint8_t>& digest
        );

:[Python]:

    .. code-block:: python

        # Returns Name
        @staticmethod
        def appendImplicitSha256Digest(
            digest  # Blob or value for Blob constructor
        )

:[JavaScript]:

    .. code-block:: javascript

        // Returns Name
        Name.Component.appendImplicitSha256Digest = function(
            digest  // Blob|Buffer
        )

:[Java]:

    .. code-block:: java

        public final Name appendImplicitSha256Digest(
            Blob digest
        )

        public final Name appendImplicitSha256Digest(
            byte[] digest
        )

:Parameters:

    - `digest`
        The SHA-256 digest value.

:Returns:

    This name so that you can chain calls to append.

:Throw:

    Throw an exception if the digest length is not 32 bytes.

.. _appendParametersSha256Digest:

Name.appendParametersSha256Digest Method
----------------------------------------

Append a component of type ParametersSha256DigestComponent, so that
:ref:`isParametersSha256Digest() <isParametersSha256Digest>` is true.

:[C++]:

    .. code-block:: c++

        Name& appendParametersSha256Digest(
            const Blob& digest
        );

        Name& appendParametersSha256Digest(
            const uint8_t *digest,
            size_t digestLength
        );

        Name& appendParametersSha256Digest(
            const std::vector<uint8_t>& digest
        );

:[Python]:

    .. code-block:: python

        # Returns Name
        @staticmethod
        def appendParametersSha256Digest(
            digest  # Blob or value for Blob constructor
        )

:[JavaScript]:

    .. code-block:: javascript

        // Returns Name
        Name.Component.appendParametersSha256Digest = function(
            digest  // Blob|Buffer
        )

:[Java]:

    .. code-block:: java

        public final Name appendParametersSha256Digest(
            Blob digest
        )

        public final Name appendParametersSha256Digest(
            byte[] digest
        )

:Parameters:

    - `digest`
        The SHA-256 digest value.

:Returns:

    This name so that you can chain calls to append.

:Throw:

    Throw an exception if the digest length is not 32 bytes.

Name.appendSegment Method
-------------------------

Append a component with the encoded segment number according to NDN naming
conventions for "Segment number" (marker 0x00).
http://named-data.net/doc/tech-memos/naming-conventions.pdf

:[C++]:

    .. code-block:: c++
    
        Name& appendSegment(
            uint64_t segment
        );

:[Python]:

    .. code-block:: python
    
        # Returns Name
        def appendSegment(self, 
            segment  # int
        )

:[JavaScript]:

    .. code-block:: javascript
    
        // Returns Name
        Name.prototype.appendSegment = function(
            segment  // number
        )

:[Java]:

    .. code-block:: java
    
        public final Name appendSegment(
            long segment
        )

:Parameters:

    - `segment`
        The integer segment number to be encoded.

:Returns:

    This name so that you can chain calls to append.

Name.appendSegmentOffset Method
-------------------------------

Append a component with the encoded segment byte offset according to NDN naming
conventions for segment "Byte offset" (marker 0xFB).
http://named-data.net/doc/tech-memos/naming-conventions.pdf

:[C++]:

    .. code-block:: c++

        Name& appendSegmentOffset(
            uint64_t segmentOffset
        );

:[Python]:

    .. code-block:: python

        # Returns Name
        def appendSegmentOffset(self,
            segmentOffset  # int
        )

:[JavaScript]:

    .. code-block:: javascript

        // Returns Name
        Name.prototype.appendSegmentOffset = function(
            segmentOffset  // number
        )

:[Java]:

    .. code-block:: java

        public final Name appendSegmentOffset(
            long segmentOffset
        )

:Parameters:

    - `segmentOffset`
        The segment byte offset.

:Returns:

    This name so that you can chain calls to append.

Name.appendSequenceNumber Method
--------------------------------

Append a component with the encoded sequence number according to NDN naming
conventions for "Sequencing" (marker 0xFE).
http://named-data.net/doc/tech-memos/naming-conventions.pdf

:[C++]:

    .. code-block:: c++

        Name& appendSequenceNumber(
            uint64_t sequenceNumber
        );

:[Python]:

    .. code-block:: python

        # Returns Name
        def appendSequenceNumber(self,
            sequenceNumber  # int
        )

:[JavaScript]:

    .. code-block:: javascript

        // Returns Name
        Name.prototype.appendSequenceNumber = function(
            sequenceNumber  // number
        )

:[Java]:

    .. code-block:: java

        public final Name appendSequenceNumber(
            long sequenceNumber
        )

:Parameters:

    - `sequenceNumber`
        The sequence number.

:Returns:

    This name so that you can chain calls to append.

Name.appendTimestamp Method
---------------------------

Append a component with the encoded timestamp according to NDN naming
conventions for "Timestamp" (marker 0xFC).
http://named-data.net/doc/tech-memos/naming-conventions.pdf

:[C++]:

    .. code-block:: c++

        Name& appendTimestamp(
            uint64_t timestamp
        );

:[Python]:

    .. code-block:: python

        # Returns Name
        def appendTimestamp(self,
            timestamp  # int
        )

:[JavaScript]:

    .. code-block:: javascript

        // Returns Name
        Name.prototype.appendTimestamp = function(
            timestamp  // number
        )

:[Java]:

    .. code-block:: java

        public final Name appendTimestamp(
            long timestamp
        )

:Parameters:

    - `timestamp`
        The number of microseconds since the UNIX epoch (Thursday, 1 January
        1970) not counting leap seconds.

:Returns:

    This name so that you can chain calls to append.

Name.appendVersion Method
-------------------------

Append a component with the encoded version number according to NDN naming
conventions for "Versioning" (marker 0xFD).
http://named-data.net/doc/tech-memos/naming-conventions.pdf
Note that this encodes the exact value of version without converting from a time
representation.

:[C++]:

    .. code-block:: c++
    
        Name& appendVersion(
            uint64_t version
        );

:[Python]:

    .. code-block:: python
    
        # Returns Name
        def appendVersion(self, 
            version  # int
        )

:[JavaScript]:

    .. code-block:: javascript
    
        // Returns Name
        Name.prototype.appendVersion = function(
            version  // number
        )

:[Java]:

    .. code-block:: java
    
        public final Name appendVersion(
            long version
        )

:Parameters:

    - `version`
        The version number to be encoded.

:Returns:

    This name so that you can chain calls to append.

Name.clear Method
-----------------

Clear all the components.

:[C++]:

    .. code-block:: c++
    
        void clear();

:[Python]:

    .. code-block:: python
    
        def clear(self)

:[JavaScript]:

    .. code-block:: javascript
    
        Name.prototype.clear = function()

:[Java]:

    .. code-block:: java
    
        public final void clear()

Name.compare Methods
--------------------

.. _Name.compare:

Name.compare Method (basic)
^^^^^^^^^^^^^^^^^^^^^^^^^^^

Compare this to the other Name using NDN canonical ordering.  If the 
first components of each name are not equal, this returns -1 if the 
first comes before the second using the NDN canonical ordering for name 
components, or 1 if it comes after. If they are equal, this compares the 
second components of each name, etc.  If both names are the same up to
the size of the shorter name, this returns -1 if the first name is 
shorter than the second or 1 if it is longer.  For example, sorted 
gives: /a/b/d /a/b/cc /c /c/a /bb .  This is intuitive because all names
with the prefix /a are next to each other.  But it may be also be 
counter-intuitive because /c comes before /bb according to NDN canonical 
ordering since it is shorter.

See http://named-data.net/doc/0.2/technical/CanonicalOrder.html

:[C++]:

    .. code-block:: c++
    
        int compare(
            const Name& other
        ) const;

:[Python]:

    .. code-block:: python
    
        # Returns int
        def compare(self, 
            other  # Name
        )

:[JavaScript]:

    .. code-block:: javascript

        // Returns number
        Name.prototype.compare = function(
            other  // Name
        )

:[Java]:

    .. code-block:: java
    
        public final int compare(
            Name other
        )

:Parameters:

    - `other`
        The other Name to compare with.

:Returns:

    0 If they compare equal, -1 if this Name comes before other in the
    canonical ordering, or 1 if this Name comes after other in the canonical
    ordering.

Name.compare Method (sub names)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Compare a subset of this name to a subset of the other name, equivalent to
this. :ref:`getSubName <Name.getSubName>`. :ref:`compare <Name.compare>` (other. :ref:`getSubName <Name.getSubName>` (iOtherStartComponent, nOtherComponents)).

:[C++]:

    .. code-block:: c++

        int compare(
            int iStartComponent,
            size_t nComponents,
            const Name& other
            [, int iOtherStartComponent]
            [, size_t nOtherComponents]
        ) const;

:[Python]:

    .. code-block:: python

        # Returns int
        def compare(self,
            iStartComponent,         # int
            nComponents,             # int
            other                    # Name
            [, iOtherStartComponent  # int]
            [, nOtherComponents      # int]
        )

:[JavaScript]:

    .. code-block:: javascript

        // Returns number
        Name.prototype.compare = function(
            iStartComponent,         // int
            nComponents,             // int
            other                    // Name
            [, iOtherStartComponent  // int]
            [, nOtherComponents      // int]
        )

:[Java]:

    .. code-block:: java

        public final int compare(
            int iStartComponent,
            int nComponents,
            Name other
            [, int iOtherStartComponent]
            [, int nOtherComponents]
        )

:Parameters:

    - `iStartComponent`
        The index if the first component of this name to compare. If
        iStartComponent is -N then compare components starting from name.size() - N.

    - `nComponents`
        The number of components starting at iStartComponent. If greater than
        the size of this name, compare until the end of the name.

    - `other`
        The other Name to compare with.

    - `iOtherStartComponent`
        (optional) The index if the first component of the other name to compare.
        If iOtherStartComponent is -N then compare components starting from
        other.size() - N. If omitted, compare starting from index 0.

    - `nOtherComponents`
        (optional) The number of components starting at iOtherStartComponent. If
        omitted or greater than the size of this name, compare until the end of
        the name.

:Returns:

    0 If they compare equal, -1 if this Name comes before other in the
    canonical ordering, or 1 if this Name comes after other in the canonical
    ordering.

Name.equals Method
------------------

Check if this name has the same component count and components as the given name.

:[C++]:

    .. code-block:: c++

        bool equals(
            const Name& name
        ) const;

:[Python]:

    .. code-block:: python

        # Returns bool
        def equals(self,
            name  # Name
        )

:[JavaScript]:

    .. code-block:: javascript

        // Returns boolean
        Name.prototype.equals = function(
            name  // Name
        )

:[Java]:

    .. code-block:: java

        public boolean equals(
            Name name
        )

:Parameters:

    - name
        The Name to check.

:Returns:

    True if the names are equal, otherwise false.

.. _fromEscapedString:
    
Name.fromEscapedString Method
-----------------------------

Make a Blob value by decoding the escapedString according to the NDN URI Scheme.
If the escaped string is "", "." or ".." then return a Blob with a null pointer, 
which means the component should be skipped in a URI name.
This does not check for a type code prefix such as "sha256digest=".

:[C++]:

    .. code-block:: c++
    
        static Blob fromEscapedString(
            const std::string& escapedString
        );
    
        void set(
            const char *escapedString
        );

:[Python]:

    .. code-block:: python
    
        # Returns Blob
        @staticmethod
        def fromEscapedString(
            escapedString  # str
        )

:[JavaScript]:

    .. code-block:: javascript

        // Returns Blob
        Name.fromEscapedString = function(
            escapedString  // string
        )

:[Java]:

    .. code-block:: java
    
        public static Blob fromEscapedString(
            String escapedString
        )

:Parameters:

    - `escapedString`
        The escaped string.

:Returns:
    The unescaped Blob value. If the escapedString is not a valid 
    escaped component, then the Blob isNull().

Name.get Method
---------------

Get a Name Component by index number.

:[C++]:

    .. code-block:: c++
    
        const Component& get(
            int i
        ) const;

:[Python]:

    .. code-block:: python
    
        # Returns Name.Component
        def get(self, 
            i  # int
        )

:[JavaScript]:

    .. code-block:: javascript
    
        // Returns Name.Component
        Name.prototype.get = function(
            i  // number
        )

:[Java]:

    .. code-block:: java
    
        public final Component get(
            int i
        )

:Parameters:

    - `i`
        The index of the component to get, starting from 0. However, if i is negative, return the component
        at size() - (-i).

:Returns:

    The Name.Component.

Name.getPrefix Method
---------------------

Get a new Name with the first nComponents components of this Name.

:[C++]:

    .. code-block:: c++
    
        Name getPrefix(
            int nComponents
        ) const;

:[Python]:

    .. code-block:: python
    
        # Returns Name
        def getPrefix(self, 
            nComponents  # int
        )

:[JavaScript]:

    .. code-block:: javascript
    
        // Returns Name
        Name.prototype.getPrefix = function(
            nComponents  // number
        )

:[Java]:

    .. code-block:: java
    
        public final Name getPrefix(
            int nComponents
        )

:Parameters:

    - nComponents
        The number of prefix components. If larger than the number of components in this name, return a copy of this Name. 
        If nComponents is -N then return the prefix up to name.size() - N. For example getPrefix(-1) returns the 
        name without the final component.

:Returns:

    A new Name.

.. _Name.getSubName:

Name.getSubName Method
----------------------

Get a new name, constructed as a subset of components.

:[C++]:

    .. code-block:: c++
    
        Name getSubName(
            int iStartComponent
            [, size_t nComponents]
        ) const;

:[Python]:

    .. code-block:: python
    
        # Returns Name
        def getSubName(self, 
            iStartComponent  # int
            [, nComponents   # int]
        )

:[JavaScript]:

    .. code-block:: javascript
    
        // Returns Name
        Name.prototype.getSubName = function(
            iStartComponent  // number
            [, nComponents   // int]
        )

:[Java]:

    .. code-block:: java
    
        public final Name getSubName(
            int iStartComponent
            [, int nComponents]
        )

:Parameters:

    - `iStartComponent`
        The index if the first component to get. If iStartComponent is -N then return return components starting from name.size() - N.

    - `nComponents`
        (optional) The number of components starting at iStartComponent.
        If omitted or greater than the size of this name, get until the end of the name.

:Returns:

    A new Name.

.. _Name.getSuccessor:

Name.Component.getSuccessor Method
----------------------------------

Get the successor of this name which is defined as follows.

* N represents the set of NDN Names, and X,Y ∈ N.
* Operator < is defined by the NDN canonical order on N.
* Y is the successor of X, if (a) X < Y, and (b) ∄ Z ∈ N s.t. X < Z < Y.

In plain words, the successor of a name is the same name, but with its last
component advanced to a next possible value. Examples:

* The successor of / is /sha256digest=0000000000000000000000000000000000000000000000000000000000000000
* The successor of /%00%01/%01%02 is /%00%01/%01%03
* The successor of /%00%01/%01%FF is /%00%01/%02%00
* The successor of /%00%01/%FF%FF is /%00%01/%00%00%00

:[C++]:

    .. code-block:: c++

        Name getSuccessor() const;

:[Python]:

    .. code-block:: python

        # Returns Name
        def getSuccessor(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns Name
        Name.Component.prototype.getSuccessor = function()

:[Java]:

    .. code-block:: java

        public final Name getSuccessor()

:Returns:

    A new name which is the successor of this.

Name.match Method
-----------------

Check if the N components of this name are the same as the first N components of the given name.

:[C++]:

    .. code-block:: c++
    
        bool match(
            const Name& name
        ) const;

:[Python]:

    .. code-block:: python
    
        # Returns bool
        def match(self, 
            name  # Name
        )

:[JavaScript]:

    .. code-block:: javascript
    
        // Returns boolean
        Name.prototype.match = function(
            name  // Name
        );

:[Java]:

    .. code-block:: java
    
        public final boolean match(
            Name name
        )

:Parameters:

    - `name`
        The Name to check.

:Returns:

    true if this matches the given name, otherwise false. This always returns true if this name is empty.
    
Name.set Method
----------------

Parse the uri according to the NDN URI Scheme and set the Name with the components.

:[C++]:

    .. code-block:: c++
    
        void set(
            const std::string& uri
        );
    
        void set(
            const char *uri
        );

:[Python]:

    .. code-block:: python
    
        def set(self,
            uri  # str
        )

:[JavaScript]:

    .. code-block:: javascript
    
        Name.prototype.set = function(
            uri  // string
        )

:[Java]:

    .. code-block:: java
    
        public final void set(
            String uri
        )

:Parameters:

    - `uri`
        The URI in the NDN URI Scheme.

Name.size Method
----------------

Get the number of components.

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
        Name.prototype.size = function()

:[Java]:

    .. code-block:: java
    
        public final int size()

:Returns:

    The number of components.

Name.toUri Method
-----------------

Return the escaped name string according to the NDN URI Scheme. See:
http://named-data.net/doc/0.1/technical/URI.html

:[C++]:

    .. code-block:: c++
    
        std::string toUri(
            [bool includeScheme]
        ) const;

:[Python]:

    .. code-block:: python
    
        # Returns str
        def toUri(self
            [, includeScheme  # bool]
        )

:[JavaScript]:

    .. code-block:: javascript
    
        // Returns string
        Name.prototype.toUri = function(
            [includeScheme  // boolean]
        )

:[Java]:

    .. code-block:: java
    
        public final String toUri(
            [boolean includeScheme]
        )

:Parameters:

    - `includeScheme`
        (optional) If true, include the "ndn:" scheme in the URI, e.g.
        "ndn:/example/name". If false or omitted, just return the path, e.g.
        "/example/name".

:Returns:

    The escaped name string according to the NDN URI Scheme.

Name.wireDecode Methods
---------------------------

Name.wireDecode Method (from Blob)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Decode the input from wire format and update this Name.

:[C++]:

    .. code-block:: c++

        void wireDecode(
            const Blob& input
        );

:[Python]:

    .. code-block:: python

        def wireDecode(self,
            input  # Blob
        )

:[JavaScript]:

    .. code-block:: javascript

        Name.prototype.wireDecode = function(
            input  // Blob
        )

:[Java]:

    .. code-block:: java

        public final void wireDecode(
            Blob content
        )

:Parameters:

    - `input`
        The immutable input byte array to be decoded.

Name.wireDecode Method (from byte array)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Decode the input from wire format and update this Name.

:[C++]:

    .. code-block:: c++

        void wireDecode(
            const std::vector<uint8_t>& input
        );

        void wireDecode(
            const uint8_t *input,
            size_t inputLength
        );

:[Python]:

    .. code-block:: python

        def wireDecode(self,
            input  # an array type with int elements
        )

:[JavaScript]:

    .. code-block:: javascript

        Name.prototype.wireDecode = function(
            input  // Buffer
        )

:[Java]:

    .. code-block:: java

        public final void wireDecode(
            ByteBuffer input
        )

:Parameters:

    - `input`
	The input byte array to be decoded.


Name.wireEncode Method
--------------------------

Encode this Name to a wire format.

:[C++]:

    .. code-block:: c++

        Blob wireEncode() const;

:[Python]:

    .. code-block:: python

        # Returns Blob
        def wireEncode()

:[JavaScript]:

    .. code-block:: javascript

        // Returns Blob
        Name.prototype.wireEncode = function()

:[Java]:

    .. code-block:: java

        public final Blob wireEncode()

:Returns:

    The encoded byte array as a Blob.
