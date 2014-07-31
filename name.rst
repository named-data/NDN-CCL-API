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

:[C++]:

    .. code-block:: c++
    
        Name& append(
            const std::vector<uint8_t>& value
        );

:[Python]:

    .. code-block:: python
    
        # Returns Name
        def append(self, 
            value  # bytearray|memoryview|other array of int
        )

:[JavaScript]:

    .. code-block:: javascript
    
        // Returns Name
        Name.prototype.append = function(
            value  // Array<number>|ArrayBuffer|Uint8Array
        )

:[Java]:

    .. code-block:: java
    
        public final Name append(
            byte[] value
        )

:Parameters:

    - `value`
        The component byte array to copy.

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
        )

:[JavaScript]:

    .. code-block:: javascript
    
        // Returns Name
        Name.prototype.append = function(
            value  // string
        )

:[Java]:

    .. code-block:: java
    
        public final Name append(
            String value
        )

:Parameters:

    - `value`
        The Unicode string which is encoded as UTF8.  
        
        .. note::

            [Python only] In Python 2, only a value of type 'unicode' is encoded 
            as UTF8. A Python 2 'str' is treated as a "raw string" and converted 
            to an array without encoding.

:Returns:

    This name so that you can chain calls to append.

Name.append Method (from Blob)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Append a new component, taking another pointer to the byte array in the Blob.

:[C++]:

    .. code-block:: c++
    
        Name& append(
            const Blob& value
        );

:[Python]:

    .. code-block:: python
    
        # Returns Name
        def append(self, 
            value  # Blob
        )

:[JavaScript]:

    .. code-block:: javascript
    
        // Returns Name
        Name.prototype.append = function(
            value  // Blob
        )

:[Java]:

    .. code-block:: java
    
        public final Name append(
            Blob value
        )

:Parameters:

    - `value`
        The Blob with the pointer to the byte array.

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

Name.appendSegment Method
-------------------------

Append a component with the encoded segment number.

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

Name.appendVersion Method
-------------------------

Append a component with the encoded version number. Note that this encodes the exact value of version without converting from a time representation.

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

Name.compare Method
-------------------

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

        // Returns boolean
        Name.prototype.compare = function(
            other  // Name
        )

:[Java]:

    .. code-block:: java
    
        public final int other(
            Name other
        )

:Parameters:

    - `other`
        The other Name to compare with.

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
        def fromEscapedString(self,
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

Name.getSubName Method
----------------------

Get a new name, constructed as a subset of components.

:[C++]:

    .. code-block:: c++
    
        Name getSubName(
            size_t iStartComponent
            [, size_t nComponents]
        ) const;

:[Python]:

    .. code-block:: python
    
        # Returns Name
        def getSubName(self, 
            iStartComponent  # int
            [, nComponents  # int]
        )

:[JavaScript]:

    .. code-block:: javascript
    
        // Returns Name
        Name.prototype.getSubName = function(
            iStartComponent  // number
            [, nComponents  // int]
        )

:[Java]:

    .. code-block:: java
    
        public final Name getSubName(
            int iStartComponent
            [, int nComponents]
        )

:Parameters:

    - `iStartComponent`
        The index if the first component to get.

    - `nComponents`
        (optional) The number of components starting at iStartComponent. If omitted, return components until the end of the name.

:Returns:

    A new Name.

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

Return the escaped name string according to the NDN URI Scheme.

:[C++]:

    .. code-block:: c++
    
        std::string toUri() const;

:[Python]:

    .. code-block:: python
    
        # Returns str
        def toUri(self)

:[JavaScript]:

    .. code-block:: javascript
    
        // Returns string
        Name.prototype.toUri = function()

:[Java]:

    .. code-block:: java
    
        public final String toUri()

:Returns:

    The escaped name string according to the NDN URI Scheme.
