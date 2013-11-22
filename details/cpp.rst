ptr_lib (C++)
=============

Some C++ methods need to use shared_ptr. Depending on where ./configure found shared_ptr, define the ptr_lib namespace as follows, so that the API always uses ndn::ptr_lib::shared_ptr.

.. code-block:: c++

    #if NDN_CPP_HAVE_STD_SHARED_PTR
    #include
    #include <memory>
    namespace ndn { namespace ptr_lib = std; }
    #elif NDN_CPP_HAVE_BOOST_SHARED_PTR
    #include <boost/shared_ptr.hpp>
    #include <boost/make_shared.hpp>
    namespace ndn { namespace ptr_lib = boost; }
    #else
    // Use the boost header files in this distribution.
    #include <ndnboost/shared_ptr.hpp>
    #include <ndnboost/make_shared.hpp>
    namespace ndn { namespace ptr_lib = ndnboost; }
    #endif

Time representation
===================

Some methods use calendar time or a time interval.  These are represented as follows.

Milliseconds Typedef
--------------------

(C++ only) A time interval represented as the number of milliseconds.

:[C++]:
    Namespace: `ndn`

.. code-block:: c++

    typedef double Milliseconds;

MillisecondsSince1970 Typedef
-----------------------------

(C++ only) The calendar time represented as the number of milliseconds since 1/1/1970.

:[C++]:
    Namespace: ndn

.. code-block:: c++

    typedef double MillisecondsSince1970;
