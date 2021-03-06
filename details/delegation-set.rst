.. _DelegationSet:

DelegationSet Class
===================

A DelegationSet holds a list of DelegationSet.Delegation entries which is
used as the content of a Link instance. If you add elements with
:ref:`DelegationSet.add <DelegationSet.add>`, then the list is a set sorted by
preference number then by name. But wireDecode will add the elements from the
wire encoding, preserving the given order and possible duplicates (in which case
a DelegationSet really holds a "list" and not necessarily a "set").

:[C++]:
    | ``#include <ndn-cpp/delegation-set.hpp>``
    | Namespace: ``ndn``

:[Python]:
    Module: ``pyndn``

:[Java]:
    Package: ``net.named_data.jndn``

.. _DelegationSet.add:

DelegationSet.add Method
------------------------

Add a new :ref:`DelegationSet.Delegation <DelegationSet.Delegation>` to the list
of delegations, sorted by preference number then by name. If there is already a
delegation with the same name, update its preference, and remove any extra
delegations with the same name.

:[C++]:

    .. code-block:: c++

        void add(
            int preference,
            const Name& name
        );

:[Python]:

    .. code-block:: python

        def add(self,
            preference,  # int
            name         # Name
        )

:[JavaScript]:

    .. code-block:: javascript

        DelegationSet.prototype.add = function(
            preference,  // number
            name         // Name
        )

:[Java]:

    .. code-block:: java

        public final void add(
            int preference,
            Name name
        )

:Parameters:

    - `preference`
        The preference number.

    - `name`
        The delegation name. This makes a copy of the name.

DelegationSet.clear Method
--------------------------

Clear the list of delegations.

:[C++]:

    .. code-block:: c++

        void clear();

:[Python]:

    .. code-block:: python

        def clear(self)

:[JavaScript]:

    .. code-block:: javascript

        DelegationSet.prototype.clear = function()

:[Java]:

    .. code-block:: java

        public final void clear()

DelegationSet.find Method
-------------------------

Find the first delegation with the given name and return its index.

:[C++]:

    .. code-block:: c++

        int find(
            const Name& name
        ) const;

:[Python]:

    .. code-block:: python

        # Returns int
        def find(self,
            name  # Name
        )

:[JavaScript]:

    .. code-block:: javascript

        // Returns number
        DelegationSet.prototype.find = function(
            name  // Name
        )

:[Java]:

    .. code-block:: java

        public final int find(
            Name name
        )

:Parameters:

    - `name`
        Then name of the delegation to find.

:Returns:

    The index of the delegation, or -1 if not found.

DelegationSet.get Method
------------------------

Get the delegation at the given index, according to the ordering described in
:ref:`DelegationSet.add <DelegationSet.add>`.

:[C++]:

    .. code-block:: c++

        const DelegationSet::Delegation& get(
            size_t i
        ) const;

:[Python]:

    .. code-block:: python

        # Returns DelegationSet.Delegation
        def get(self,
            i  # int
        )

:[JavaScript]:

    .. code-block:: javascript

        // Returns DelegationSet.Delegation
        DelegationSet.prototype.get = function(
            i  // number
        )

:[Java]:

    .. code-block:: java

        public final DelegationSet.Delegation get(
            int i
        )

:Parameters:

    - `i`
        The index of the component, starting from 0.

:Returns:

    The DelegationSet.Delegation at the index.

DelegationSet.remove Method
---------------------------

Remove every delegation entry with the given name.

:[C++]:

    .. code-block:: c++

        bool remove(
            const Name& name
        );

:[Python]:

    .. code-block:: python

        # Returns bool
        def remove(self,
            name  # Name
        )

:[JavaScript]:

    .. code-block:: javascript

        // Returns boolean
        DelegationSet.prototype.remove = function(
            name  // Name
        )

:[Java]:

    .. code-block:: java

        public final boolean remove(
            Name name
        )

:Parameters:

    - `name`
        Then name to match the name of the delegation(s) to be removed.

:Returns:

    True if a delegation was removed, otherwise false.

DelegationSet.size Method
-------------------------

Get the number of delegation entries.

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
        DelegationSet.prototype.size = function()

:[Java]:

    .. code-block:: java

        public final int size()

:Returns:

    The number of delegation entries.

.. _DelegationSet.Delegation:

DelegationSet.Delegation Class
==============================

A DelegationSet.Delegation holds a preference number and delegation name. You do
not construct a DelegationSet.Delegation directly, but use
:ref:`DelegationSet.add <DelegationSet.add>` or get delegations after decoding
a Link instance.

:[C++]:
    | ``#include <ndn-cpp/delegation-set.hpp>``
    | Namespace: ``ndn``

:[Python]:
    Module: ``pyndn``

:[Java]:
    Package: ``net.named_data.jndn``

DelegationSet.Delegation.getPreference Method
---------------------------------------------

Get the preference number.

:[C++]:

    .. code-block:: c++

        const int getPreference() const;

:[Python]:

    .. code-block:: python

        # Returns int
        def getPreference(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns number
        DelegationSet.Delegation.prototype.getPreference = function()

:[Java]:

    .. code-block:: java

        public final int getPreference()

:Returns:

    The preference number.

DelegationSet.Delegation.getName Method
---------------------------------------

Get the delegation name.

:[C++]:

    .. code-block:: c++

        const Name& getName() const;

:[Python]:

    .. code-block:: python

        # Returns Name
        def getName(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns Name
        DelegationSet.Delegation.prototype.getName = function()

:[Java]:

    .. code-block:: java

        public final Name getName()

:Returns:

    The delegation name.
