.. _InterestFilter:

InterestFilter Class
====================

An InterestFilter holds a Name prefix and optional regex match expression for
use in Face.setInterestFilter.

:[C++]:
    | ``#include <ndn-cpp/interest-filter.hpp>``
    | Namespace: ``ndn``

:[Python]:
    Module: ``pyndn``

:[Java]:
    Package: ``net.named_data.jndn``

InterestFilter Constructors
---------------------------

InterestFilter Constructor (copy)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Create a new InterestFilter as a deep copy of the given interestFilter.

:[C++]:

    .. code-block:: c++

        InterestFilter(
            const InterestFilter& interestFilter
        );

:[Python]:

    .. code-block:: python

        def __init__(self,
            interestFilter  # InterestFilter
        )

:[JavaScript]:

    .. code-block:: javascript

        var InterestFilter = function InterestFilter(
            interestFilter  // InterestFilter
        )

:[Java]:

    .. code-block:: java

        public InterestFilter(
            InterestFilter interestFilter
        )

:Parameters:

    - `interestFilter`
        The InterestFilter to copy.

InterestFilter Constructor (from prefix Name)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Create an InterestFilter to match any Interest whose name starts with the given
prefix. If the optional refexFilter is provided then the remaining components
match the regexFilter regular expression as described in
:ref:`doesMatch <InterestFilter.doesMatch>`

:[C++]:

    .. code-block:: c++

        InterestFilter(
            const Name& prefix
            [, const std::string& regexFilter]
        );

:[Python]:

    .. code-block:: python

        def __init__(self,
            prefix     # Name
            [, prefix  # str]
        )

:[JavaScript]:

    .. code-block:: javascript

        var InterestFilter = function InterestFilter(
            prefix     // Name
            [, prefix  // string]
        )

:[Java]:

    .. code-block:: java

        public InterestFilter(
            Name prefix
            [, String regexFilter]
        )

:Parameters:

    - `prefix`
        The prefix Name. This makes a copy of the Name.

    - `regexFilter`
        (optional) The regular expression for matching the remaining name
        components. If omitted, just match using the prefix.

InterestFilter Constructor (from prefix URI string)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Create an InterestFilter to match any Interest whose name starts with the given
prefix. If the optional refexFilter is provided then the remaining components
match the regexFilter regular expression as described in
:ref:`doesMatch <InterestFilter.doesMatch>`

:[C++]:

    .. code-block:: c++

        InterestFilter(
            const std::string& prefixUri
            [, const std::string& regexFilter]
        );

:[Python]:

    .. code-block:: python

        def __init__(self,
            prefixUri  # str
            [, prefix  # str]
        )

:[JavaScript]:

    .. code-block:: javascript

        var InterestFilter = function InterestFilter(
            prefixUri  // string
            [, prefix  // string]
        )

:[Java]:

    .. code-block:: java

        public InterestFilter(
            String prefixUri
            [, String regexFilter]
        )

:Parameters:

    - `prefixUri`
        The URI of the prefix Name.

    - `regexFilter`
        (optional) The regular expression for matching the remaining name
        components. If omitted, just match using the prefix.

.. _InterestFilter.doesMatch:

InterestFilter.doesMatch Method
-------------------------------

Check if the given name matches this filter. Match if name starts with this
filter's prefix. If this filter has the optional regexFilter then the remaining
components match the regexFilter regular expression. For example, the following
InterestFilter:

    InterestFilter("/hello", "<world><>+")

will match all Interests, whose name has the prefix `/hello` which is
followed by a component `world` and has at least one more component after it.
Examples:

    /hello/world/!
    
    /hello/world/x/y/z

Note that the regular expression will need to match all remaining components
(e.g., there are implicit heading `^` and trailing `$` symbols in the
regular expression).

:[C++]:

    .. code-block:: c++

        bool doesMatch(
            const Name& name
        ) const;

:[Python]:

    .. code-block:: python

        # Returns bool
        def doesMatch(self,
            name  # Name
        )

:[JavaScript]:

    .. code-block:: javascript

        // Returns boolean
        InterestFilter.prototype.doesMatch = function(
            name  // Name
        );

:[Java]:

    .. code-block:: java

        public final boolean doesMatch(
            Name name
        )

:Parameters:

    - `name`
        The name to check against this filter.

:Returns:

    True if name matches this filter, otherwise false.

InterestFilter.getPrefix Method
-------------------------------

Get the prefix given to the constructor.

:[C++]:

    .. code-block:: c++

        const ptr_lib::shared_ptr<const Name>& getPrefix() const;

:[Python]:

    .. code-block:: python

        # Returns Name
        def getPrefix(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns Name
        InterestFilter.prototype.getPrefix = function()

:[Java]:

    .. code-block:: java

        public final Name getPrefix()

:Returns:

    The prefix Name which you should not modify.

InterestFilter.getRegexFilter Method
------------------------------------

Get the regex filter. This is only valid if hasRegexFilter() is true.

:[C++]:

    .. code-block:: c++

        const Name& getRegexFilter() const;

:[Python]:

    .. code-block:: python

        # Returns Name
        def getRegexFilter(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns Name
        InterestFilter.prototype.getRegexFilter = function()

:[Java]:

    .. code-block:: java

        public final Name getRegexFilter()

:Returns:

    The regular expression for matching the remaining name components.

InterestFilter.hasRegexFilter Method
------------------------------------

Check if a regexFilter was supplied to the constructor.

:[C++]:

    .. code-block:: c++

        bool hasRegexFilter() const;

:[Python]:

    .. code-block:: python

        # Returns bool
        def hasRegexFilter(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns boolean
        InterestFilter.prototype.hasRegexFilter = function()

:[Java]:

    .. code-block:: java

        public final boolean hasRegexFilter()

:Returns:

    True if a regexFilter was supplied to the constructor.
