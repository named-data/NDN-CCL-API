.. _Name.Component:

Name.Component Class
====================

A Name.Component is holds a read-only name component value

:[C++]:

    Namespace: ``ndn``

Name.Component Constructor
--------------------------

Create a new Name.Component, copying the optional value.


:[C++]:

    .. code-block:: c++
    
        Name::Component(
            [const std::vector<uint8_t>& value]
        );

:Parameters:

    - ``value``
        (optional) The content byte array to copy.

Name.Component.toEscapedString Method
-------------------------------------

Convert this component value by escaping characters according to the NDN URI Scheme.

:[C++]:

    .. code-block:: c++
    
        std::string toEscapedString() const ();

:Returns:

    The escaped string.
