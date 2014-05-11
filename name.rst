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

:[Python]:

    .. code-block:: python
    
        def __init__(self
            [, components # Array<string>]
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
        (optional) The array of :ref:`name components <Name.Component>`.

Name Constructor (from URI)
^^^^^^^^^^^^^^^^^^^^^^^^^^^

Parse the uri according to the NDN URI Scheme and create the Name with the components.

:[C++]:

    .. code-block:: c++
    
        Name(
            const char* uri
        );

:[JavaScript]:

    .. code-block:: javascript
    
        var Name = function Name (
            uri // string
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

:[JavaScript]:

.. code-block:: javascript

    var Name = function Name (
    
        name // Name
    
    )

:[Python]:

.. code-block:: python

    def __init__(self,
    
        name # Name
    
    )

:Parameters:

    - `name`
	The Name to copy.

Name.toUri Method
-----------------

Return the escaped name string according to the NDN URI Scheme.

:[C++]:

    .. code-block:: c++
    
        std::string toUri() const ();

:[JavaScript]:

    .. code-block:: javascript
    
        // Returns string
        Name.prototype.toUri = function();

:Returns:

The escaped name string according to the NDN URI Scheme.

Name.size Method
----------------

Get the number of components.

:[C++]:

    .. code-block:: c++
    
        size_t size() const;

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

:[JavaScript]:

    .. code-block:: javascript
    
        // Returns Name
        Name.prototype.getPrefix = function(
            nComponents  // Number
        );

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

:[JavaScript]:

    .. code-block:: javascript
    
        // Returns boolean
        Name.prototype.match = function(
            name  // Name
        );

:Parameters:

    - `name`
        The Name to check.

    - `nComponents`
        The number of components starting at iStartComponent. If omitted, return components until the end of the name.

:Returns:

    true if this matches the given name, otherwise false.  This always returns true if this name is empty.

Name.append Methods
-------------------

Name.append Method (copy byte array)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Append a new component, copying from byte array.

:[C++]:

    .. code-block:: c++
    
        Name& append(
            const std::vector<uint8_t>& value
        );

:[JavaScript]:

    .. code-block:: javascript
    
        // Returns this Name
        Name.prototype.append = function(
            value  // Array<number>|ArrayBuffer|Uint8Array
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

:[JavaScript]:

    .. code-block:: javascript
    
        // Returns this Name
        Name.prototype.append = function(
            value  // Name
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

:[JavaScript]:

    .. code-block:: javascript
    
        // Returns this Name
        Name.prototype.appendSegment = function(
            segment  // Number
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

:Parameters:

    - `version`
        The version number to be encoded.

:Returns:

    This name so that you can chain calls to append.

Other Name getter and setter methods
------------------------------------

:[JavaScript]:

    .. code-block:: javascript
    
        // Returns a new Name
        Name.prototype.cut = function(
            minusComponents  // number
        )
        
        // Returns number
        Name.prototype.indexOfFileName = function()
        
        // Returns Boolean
        Name.prototype.equalsName = function(
            name            // Name
        )
