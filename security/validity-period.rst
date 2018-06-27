.. _ValidityPeriod:

ValidityPeriod Class
====================

A ValidityPeriod is used in a Data packet's SignatureInfo and represents the'
begin and end times of a certificate's validity period.

:[C++]:
    | ``#include <ndn-cpp/security/validity-period.hpp>``
    | Namespace: ``ndn``

:[Python]:
    Module: ``pyndn``

:[Java]:
    Package: ``net.named_data.jndn.security``

ValidityPeriod Constructors
---------------------------

ValidityPeriod Constructor (default)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Create a default ValidityPeriod where the period is not specified.

:[C++]:

    .. code-block:: c++

        ValidityPeriod();

:[Python]:

    .. code-block:: python
    
        def __init__(self)

:[JavaScript]:

    .. code-block:: javascript

        var ValidityPeriod = function ValidityPeriod()

:[Java]:

    .. code-block:: java
    
        public ValidityPeriod()

ValidityPeriod Constructor (copy)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Create a new ValidityPeriod as a copy of the given validity period.

:[C++]:

    .. code-block:: c++

        ValidityPeriod(
            const ValidityPeriod& validityPeriod
        );

:[Python]:

    .. code-block:: python
    
        def __init__(self,
            validityPeriod  # ValidityPeriod
        )

:[JavaScript]:

    .. code-block:: javascript

        var ValidityPeriod = function ValidityPeriod(
            validityPeriod  // ValidityPeriod
        )

:[Java]:

    .. code-block:: java
    
        public ValidityPeriod(
            ValidityPeriod validityPeriod
        )

:Parameters:

    - `validityPeriod`
        The ValidityPeriod to copy.

ValidityPeriod Constructor (from values)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Create a ValidityPeriod with the given period.

:[C++]:

    .. code-block:: c++

        ValidityPeriod(
            MillisecondsSince1970 notBefore,
            MillisecondsSince1970 notAfter
        );

:[Python]:

    .. code-block:: python

        def __init__(self,
            notBefore,  # float
            notAfter    # float
        )

:[JavaScript]:

    .. code-block:: javascript

        var ValidityPeriod = function ValidityPeriod(
            notBefore,  // number
            notAfter    // number
        )

:[Java]:

    .. code-block:: java

        public ValidityPeriod(
            double notBefore,
            double notAfter
        )

:Parameters:

    - `notBefore`
        The beginning of the validity period range as milliseconds since
        Jan 1, 1970 UTC. Note that this is rounded up to the nearest whole
        second.

    - `notAfter`
        The end of the validity period range as milliseconds since
        Jan 1, 1970 UTC. Note that this is rounded up to the nearest whole
        second.

ValidityPeriod.clear Method
---------------------------

Reset to a default ValidityPeriod where the period is not specified.

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

ValidityPeriod.equals Method
----------------------------

Check if this name has the same component count and components as the given name.

:[C++]:

    .. code-block:: c++

        bool equals(
            const ValidityPeriod& other
        ) const;

:[Python]:

    .. code-block:: python

        # Returns bool
        def equals(self,
            other  # ValidityPeriod
        )

:[JavaScript]:

    .. code-block:: javascript

        // Returns boolean
        ValidityPeriod.prototype.equals = function(
            other  // ValidityPeriod
        )

:[Java]:

    .. code-block:: java

        public boolean equals(
            ValidityPeriod other
        )

:Parameters:

    - other
        The other ValidityPeriod to compare with.

:Returns:

    True if the validity periods are equal, otherwise false.

ValidityPeriod.getNotBefore Method
----------------------------------

Get the beginning of the validity period range.

:[C++]:

    .. code-block:: c++

        MillisecondsSince1970 getNotBefore() const;

:[Python]:

    .. code-block:: python

        # Returns float
        def getNotBefore(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns number
        ValidityPeriod.prototype.getNotBefore = function()

:[Java]:

    .. code-block:: java

        public final double getNotBefore()

:Returns:

    The time as milliseconds since Jan 1, 1970 UTC. If not specified, return
    ``DBL_MAX`` (C++) or ``Double.MAX_VALUE`` (Java) or ``1e37`` (Python) or
    ``Number.MAX_VALUE`` (JavaScript).

ValidityPeriod.getNotAfter Method
----------------------------------

Get the end of the validity period range.

:[C++]:

    .. code-block:: c++

        MillisecondsSince1970 getNotAfter() const;

:[Python]:

    .. code-block:: python

        # Returns float
        def getNotAfter(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns number
        ValidityPeriod.prototype.getNotAfter = function()

:[Java]:

    .. code-block:: java

        public final double getNotAfter()

:Returns:

    The time as milliseconds since Jan 1, 1970 UTC. If not specified, return
    ``-DBL_MAX`` (C++) or ``-Double.MAX_VALUE`` (Java) or ``-1e37`` (Python) or
    ``-Number.MAX_VALUE`` (JavaScript).

ValidityPeriod.hasPeriod Method
------------------------------------

Check if the period has been set.

:[C++]:

    .. code-block:: c++

        bool hasPeriod() const;

:[Python]:

    .. code-block:: python

        # Returns bool
        def hasPeriod(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns boolean
        ValidityPeriod.prototype.hasPeriod = function()

:[Java]:

    .. code-block:: java

        public final boolean hasPeriod()

:Returns:

    True if the period has been set, false if the period is not specified (after
    calling the default constructor or clear).

ValidityPeriod.isValid Method
-----------------------------

Check if the time falls within the validity period.

:[C++]:

    .. code-block:: c++

        bool isValid(
            [MillisecondsSince1970 time]
        ) const;

:[Python]:

    .. code-block:: python

        # Returns bool
        def isValid(self
            [, time  # float]
        )

:[JavaScript]:

    .. code-block:: javascript

        // Returns boolean
        ValidityPeriod.prototype.isValid = function(
            [time  // number]
        )

:[Java]:

    .. code-block:: java

        public final boolean isValid(
            [double time]
        )

:Parameters:

    - `time`
        (optional) The time to check as milliseconds since Jan 1, 1970 UTC. If
        omitted, use the current time.

:Returns:

    True if the beginning of the validity period is less than or equal to time
    and time is less than or equal to the end of the validity period.

ValidityPeriod.setPeriod Method
-------------------------------

Set the validity period.

:[C++]:

    .. code-block:: c++

        ValidityPeriod& setPeriod(
            MillisecondsSince1970 notBefore,
            MillisecondsSince1970 notAfter
        );

:[Python]:

    .. code-block:: python

        # Returns ValidityPeriod
        def setPeriod(self,
            notBefore,  # float
            notAfter    # float
        )

:[JavaScript]:

    .. code-block:: javascript

        // Returns ValidityPeriod
        ValidityPeriod.prototype.setPeriod = function(
            notBefore,  // number
            notAfter    // number
        )

:[Java]:

    .. code-block:: java

        public final ValidityPeriod setPeriod(
            double notBefore,
            double notAfter
        )

:Parameters:

    - `notBefore`
        The beginning of the validity period range as milliseconds since
        Jan 1, 1970 UTC. Note that this is rounded up to the nearest whole
        second.

    - `notAfter`
        The end of the validity period range as milliseconds since
        Jan 1, 1970 UTC. Note that this is rounded up to the nearest whole
        second.

:Returns:

    This ValidityPeriod so that you can chain calls to update values.
