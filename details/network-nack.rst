.. _NetworkNack:

NetworkNack Class
=================

A NetworkNack object represents a network Nack packet and includes a Nack reason.
It is provided in the OnNetworkNack callback from
:ref:`Face.expressInterest <Face.expressInterest>`.

:[C++]:
    | ``#include <ndn-cpp/network-nack.hpp>``
    | Namespace: ``ndn``

:[Python]:
    Module: ``pyndn``

:[Java]:
    Package: ``net.named_data.jndn``

.. _NetworkNack.getOtherReasonCode:

NetworkNack.getOtherReasonCode Method
-------------------------------------

Get the reason code from the packet which is other than a recognized Reason enum
value. This is only meaningful if :ref:`getReason() <NetworkNack.getReason>` is
OTHER_CODE.

:[C++]:

    .. code-block:: c++

        int getOtherReasonCode() const;

:[Python]:

    .. code-block:: python

        # Returns int
        def getOtherReasonCode(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns number
        NetworkNack.prototype.getOtherReasonCode = function()

:[Java]:

    .. code-block:: java

        public final int getOtherReasonCode()

:Returns:

    The reason code.

.. _NetworkNack.getReason:

NetworkNack.getReason Method
----------------------------

Get the network Nack reason.

:[C++]:

    .. code-block:: c++

        ndn_NetworkNackReason getReason() const;

:[Python]:

    .. code-block:: python

        # Returns int
        def getReason(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns number
        NetworkNack.prototype.getReason = function()

:[Java]:

    .. code-block:: java

        public final NetworkNack.Reason getReason()

:Returns:

    The reason enum value which is NONE, CONGESTION, DUPLICATE, NO_ROUTE or
    OTHER_CODE as follows. If this returns OTHER_CODE, then call
    :ref:`getOtherReasonCode() <NetworkNack.getOtherReasonCode>` to get the
    unrecognized reason code.

        * C++: ``ndn_NetworkNackReason_NONE``, ``ndn_NetworkNackReason_CONGESTION``, ``ndn_NetworkNackReason_DUPLICATE``, ``ndn_NetworkNackReason_NO_ROUTE``, ``ndn_NetworkNackReason_OTHER_CODE``
        * Python, JavaScript, Java: ``NetworkNack.Reason.NONE``, ``NetworkNack.Reason.CONGESTION``, ``NetworkNack.Reason.DUPLICATE``, ``NetworkNack.Reason.NO_ROUTE``, ``NetworkNack.Reason.OTHER_CODE``
