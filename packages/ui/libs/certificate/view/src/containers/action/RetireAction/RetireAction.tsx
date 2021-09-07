import { CertificateDTO } from '@energyweb/issuer-irec-api-react-query-client';
import {
  ListActionComponentProps,
  FormSelect,
  FormDatePicker,
  FormInput,
} from '@energyweb/origin-ui-core';
import { CircularProgress, Grid, Box } from '@material-ui/core';
import { isEmpty } from 'lodash';
import React, { PropsWithChildren, ReactElement } from 'react';
import { CertificateActionContent } from '../../list';
import { useRetireActionEffects } from './RetireAction.effects';
import { useStyles } from './RetireAction.styles';

type RetireActionProps = ListActionComponentProps<CertificateDTO['id']>;

export type TRetireAction = (
  props: PropsWithChildren<RetireActionProps>
) => ReactElement;

export const RetireAction: TRetireAction = ({ selectedIds, resetIds }) => {
  const classes = useStyles();
  const {
    title,
    buttonText,
    selectedItems,
    retireHandler,
    isLoading,
    buttonDisabled,
    fields,
    register,
    control,
    errors,
  } = useRetireActionEffects(selectedIds, resetIds);

  if (isLoading) return <CircularProgress />;

  return (
    <CertificateActionContent
      title={title}
      buttonText={buttonText}
      selectedIds={selectedIds}
      selectedItems={selectedItems}
      submitHandler={retireHandler}
      buttonDisabled={buttonDisabled}
    >
      <FormSelect
        control={control}
        field={fields[0]}
        errorExists={!isEmpty(errors[fields[0].name])}
        errorText={(errors[fields[0].name] as any)?.message ?? ''}
      />
      <Grid container spacing={1} className={classes.mb}>
        <Grid item xs={6}>
          <FormDatePicker
            control={control}
            field={fields[1]}
            errorExists={!isEmpty(errors[fields[1].name])}
            errorText={(errors[fields[1].name] as any)?.message ?? ''}
          />
        </Grid>
        <Grid item xs={6}>
          <FormDatePicker
            control={control}
            field={fields[2]}
            errorExists={!isEmpty(errors[fields[2].name])}
            errorText={(errors[fields[2].name] as any)?.message ?? ''}
          />
        </Grid>
      </Grid>
      <Box mb={2}>
        <FormInput
          register={register}
          field={fields[3]}
          errorExists={!isEmpty(errors[fields[3].name])}
          errorText={(errors[fields[3].name] as any)?.message ?? ''}
        />
      </Box>
    </CertificateActionContent>
  );
};
