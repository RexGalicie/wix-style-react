import React from 'react';
import { FamilyStructure } from '../../sharedComponents';
import PageExamples from './examples/PageExamples';
import CardExamples from './examples/CardExamples';
import TableExamples from './examples/TableExamples';

const LayoutFamily = () => (
  <FamilyStructure title="2. Layout" showPreview={false}>
    <PageExamples />
    <CardExamples />
    <TableExamples />
  </FamilyStructure>
);

export default LayoutFamily;
