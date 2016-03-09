.. _Link:

Link Class
==========

The Link class extends :ref:`Data <Data>` and represents a Link instance where
the Data content is an encoded :ref:`DelegationSet <DelegationSet>`.

:[C++]:
    | ``#include <ndn-cpp/link.hpp>``
    | Namespace: ``ndn``

:[Python]:
    Module: ``pyndn``

:[Java]:
    Package: ``net.named_data.jndn``

Link Constructors
-----------------

Name Constructor (default)
^^^^^^^^^^^^^^^^^^^^^^^^^^

Create a Link with default values and where the list of delegations is empty and
the meta info type is LINK.

:[C++]:

    .. code-block:: c++

        Link();

:[Python]:

    .. code-block:: python

        def __init__(self)

:[JavaScript]:

    .. code-block:: javascript

        var Link = function Link()

:[Java]:

    .. code-block:: java

        public Link()

Link Constructor (from Data)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Create a Link, copying values from the other Data object. If the content can be
decoded, then update the list of delegations.

:[C++]:

    .. code-block:: c++

        Link(
            const Data& data
        );

:[Python]:

    .. code-block:: python

        def __init__(self,
            data  # Data
        )

:[JavaScript]:

    .. code-block:: javascript

        var Link = function Link(
            data  // Data
        )

:[Java]:

    .. code-block:: java

        public Link(
            Data data
        )

:Parameters:

    - `data`
        The Data object to copy values from.

.. _Link.addDelegation:

Link.addDelegation Method
-------------------------

Add a new delegation to the list of delegations, sorted by preference number
then by name. Re-encode this object's content which holds the delegation set.

:[C++]:

    .. code-block:: c++

        Link& addDelegation(
            int preference,
            const Name& name
        );

:[Python]:

    .. code-block:: python

        # Returns Link
        def addDelegation(self,
            preference,  # int
            name         # Name
        )

:[JavaScript]:

    .. code-block:: javascript

        // Returns Link
        Link.prototype.addDelegation = function(
            preference  // number
            name        // Name
        )

:[Java]:

    .. code-block:: java

        public final Link addDelegation(
            int preference,
            Name name
        )

:Parameters:

    - `preference`
        The preference number.

    - `name`
        The delegation name. This makes a copy of the name.

:Returns:

    This Link so that you can chain calls to update values.

Link.getDelegations Method
--------------------------

Get the list of delegation for read only.

:[C++]:

    .. code-block:: c++

        const DelegationSet& getDelegations() const;

:[Python]:

    .. code-block:: python

        # Returns DelegationSet
        def getDelegations(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns DelegationSet
        Link.prototype.getDelegations = function()

:[Java]:

    .. code-block:: java

        public final DelegationSet getDelegations()

:Returns:

    The list of delegation, which you should treat as read-only. To
    modify it, call :ref:`Link.addDelegation <Link.addDelegation>`, etc.

Link.removeDelegation Method
----------------------------

Remove every delegation entry with the given name. Re-encode this object's
content which holds the delegation set.

:[C++]:

    .. code-block:: c++

        bool removeDelegation(
            const Name& name
        );

:[Python]:

    .. code-block:: python

        # Returns bool
        def removeDelegation(self,
            name         # Name
        )

:[JavaScript]:

    .. code-block:: javascript

        // Returns boolean
        Link.prototype.removeDelegation = function(
            name        // Name
        )

:[Java]:

    .. code-block:: java

        public final boolean removeDelegation(
            Name name
        )

:Parameters:

    - `name`
        Then name to match the name of the delegation(s) to be removed.

:Returns:

    True if a delegation was removed, otherwise false.
