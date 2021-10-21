import React, { useContext } from 'react';
import { observer } from 'mobx-react';

import { StoreContext } from 'adapters/store/StoreProvider';

import { removePanelActionCase } from 'application/PanelActions';
import { ActionsPanelOwnProps } from './types';

import ActionsPanel from '.';

export default observer((props: ActionsPanelOwnProps) => {
  const { panelActions } = useContext(StoreContext);

  return (
    <ActionsPanel
      panelActions={panelActions.panelActions}
      removePanelAction={removePanelActionCase}
      {...props}
    />
  );
});
