#pragma once

#include "IInstrumentFactory.h"

namespace shift::instrument::impl {

class InstrumentFactory : public IInstrumentFactory
{
public:
    virtual std::unique_ptr<IInstrument> createInstrument(InstrumentType instrumentType) override;
};


}