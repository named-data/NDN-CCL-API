.. _Exclude:

Exclude Class
=============

The Exclude class is used by Interest and holds an array of 
:ref:`Exclude.Entry <Exclude.Entry>` to represent the fields of an NDN Exclude 
selector.

:[C++]:
    | ``#include <ndn-cpp/exclude.hpp>``
    | Namespace: ``ndn``

:[Python]:
    Module: ``pyndn``

:[Java]:
    Package: ``net.named_data.jndn``

Exclude Constructors
--------------------

Exclude Constructor (default)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Create a new Exclude with no entries.

:[C++]:

    .. code-block:: c++

        Exclude();

:[Python]:

    .. code-block:: python
    
        def __init__(self)

:[JavaScript]:

    .. code-block:: javascript

        var Exclude = function Exclude()

:[Java]:

    .. code-block:: java
    
        public Exclude()

Exclude Constructor (copy)
^^^^^^^^^^^^^^^^^^^^^^^^^^

Create a new Exclude as a deep copy of the given exclude.

:[C++]:

    .. code-block:: c++

        Exclude(
            const Exclude& exclude
        );

:[Python]:

    .. code-block:: python
    
        def __init__(self,
            exclude  # Exclude
        )

:[JavaScript]:

    .. code-block:: javascript

        var Exclude = function Exclude(
            exclude  // Exclude
        )

:[Java]:

    .. code-block:: java
    
        public Exclude(
            Exclude exclude
        )

:Parameters:

    - `exclude`
        The Exclude to copy.

.. _Exclude.appendAny:

Exclude.appendAny Method
------------------------

Append a new entry which represents any component.

:[C++]:

    .. code-block:: c++
    
        Exclude& appendAny();

:[Python]:

    .. code-block:: python
    
        # Returns Exclude
        def appendAny(self)

:[JavaScript]:

    .. code-block:: javascript
    
        // Returns Exclude
        Exclude.prototype.appendAny = function()

:[Java]:

    .. code-block:: java
    
        public final Exclude appendAny()

:Returns:

    This exclude so that you can chain calls to append.

.. _Exclude.appendComponent:

Exclude.appendComponent Method
------------------------------

Append a new entry, taking another pointer to the Name.Component.

:[C++]:

    .. code-block:: c++
    
        Exclude& appendComponent(
            const Name::Component& component
        );

:[Python]:

    .. code-block:: python
    
        # Returns Exclude
        def appendComponent(self, 
            component  # Name.Component
        )

:[JavaScript]:

    .. code-block:: javascript
    
        // Returns Exclude
        Exclude.prototype.appendComponent = function(
            component  // Name.Component
        )

:[Java]:

    .. code-block:: java
    
        public final Exclude appendComponent(
            Name.Component component
        )

:Parameters:

    - `component`
        The Name.Component to append.

:Returns:

    This exclude so that you can chain calls to append.

Exclude.clear Method
--------------------

Clear all the entries.

:[C++]:

    .. code-block:: c++
    
        void clear();

:[Python]:

    .. code-block:: python
    
        def clear(self)

:[JavaScript]:

    .. code-block:: javascript
    
        Exclude.prototype.clear = function()

:[Java]:

    .. code-block:: java
    
        public final void clear()

Exclude.get Method
------------------

Get an Exclude.Entry by index number.

:[C++]:

    .. code-block:: c++
    
        const Exclude::Entry& get(
            size_t i
        ) const;

:[Python]:

    .. code-block:: python
    
        # Returns Exclude.Entry
        def get(self, 
            i  # int
        )

:[Java]:

    .. code-block:: java
    
        public final Exclude.Entry get(
            int i
        )

:Parameters:

    - `i`
        The index of the entry to get, starting from 0.

:Returns:

    The Exclude.Entry at the index.

Exclude.matches Method
----------------------

Check if the component matches any of the exclude criteria.

:[C++]:

    .. code-block:: c++
    
        bool matches(
            const Name::Component& component
        ) const;

:[Python]:

    .. code-block:: python
    
        # Returns bool
        def matches(self, 
            component  # Name.Component
        )

:[JavaScript]:

    .. code-block:: javascript
    
        // Returns boolean
        Exclude.prototype.matches = function(
            component  // Name.Component
        );

:[Java]:

    .. code-block:: java
    
        public final boolean matches(
            Name.Component component
        )

:Parameters:

    - `name`
        The name component to check.

:Returns:

    True if the component matches any of the exclude criteria, otherwise false.

Exclude.size Method
-------------------

Get the number of entries.

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
        Exclude.prototype.size = function()

:[Java]:

    .. code-block:: java
    
        public final int size()

:Returns:

    The number of entries.

Exclude.toUri Method
--------------------

.. container:: experimental

    .. admonition:: Experimental

       This method is experimental.  The NDN specifications don't officially 
       define how to show exclude entries in a URI.

    Encode this Exclude with entries separated by "," and ANY shown as "*".  
    For example "month5,*".

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
          Exclude.prototype.toUri = function()
          
    :[Java]:

        .. code-block:: java

            public final String toUri()

    :Returns:

        The URI string.

.. _Exclude.Entry:

Exclude.Entry Class
===================

An Exclude.Entry holds a type which is ANY or COMPONENT. If the type is COMPONENT, 
this also holds the component value. You do not construct an Exclude.Entry 
directly, but use :ref:`Exclude.appendAny <Exclude.appendAny>` or 
:ref:`Exclude.appendComponent <Exclude.appendComponent>`.

:[C++]:
    | ``#include <ndn-cpp/exclude.hpp>``
    | Namespace: ``ndn``

:[Python]:
    Module: ``pyndn``

:[Java]:
    Package: ``net.named_data.jndn``

Exclude.Entry.getType Method
----------------------------

Get the type of this Exclude.Entry.

:[C++]:

    .. code-block:: c++
    
        ndn_ExcludeType getType() const;

:[Python]:

    .. code-block:: python
    
        # Returns int
        def getType(self)

:[Java]:

    .. code-block:: java
    
        public final Exclude.Type getType()

:Returns:

    The type of this entry which is ANY or COMPONENT as follows:
    
        * C++: ``ndn_Exclude_ANY`` or ``ndn_Exclude_COMPONENT``
        * Python: ``Exclude.ANY`` or ``Exclude.COMPONENT``
        * Java: ``Exclude.Type.ANY`` or ``Exclude.Type.COMPONENT``

Name.Component.getComponent Method
----------------------------------

Get the component value for this entry (only valid if this entry has type COMPONENT).

:[C++]:

    .. code-block:: c++
    
        const Name::Component& getComponent() const;

:[Python]:

    .. code-block:: python
    
        # Returns Name.Component
        def getComponent(self)

:[Java]:

    .. code-block:: java
    
        public final Name.Component getComponent()

:Returns:

    The component value (only valid if this entry has type COMPONENT).
