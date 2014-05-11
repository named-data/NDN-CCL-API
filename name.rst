.. _Name:

Name Class
==========

A Name holds an array of Name.Component and represents an NDN name.

:[C++]:
    Namespace: ``ndn``

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
    
        var Name = function Name (
            [components   // Array<Uint8Array>]    
        )

:[Java]:

    .. code-block:: java
    
        public Name(
            [, ArrayList components]
        )

    .. code-block:: java
    
        public Name(
            [, Component[] components]
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
    
        def __init__(self
            uri  # str
        )

:[JavaScript]:

    .. code-block:: javascript
    
        var Name = function Name (
            uri // string
        )

:[Java]:

    .. code-block:: java
    
        public Name(
            String uri
        )

:Parameters:

    - `uri`
        The URI in NDN URI Scheme.

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

        var Name = function Name (
            name // Name
        )

:[Java]:

    .. code-block:: java
    
        public Name(
            Name name
        )

:Parameters:

    - `name`
	The Name to copy.

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
        def getSubName(self, 
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

