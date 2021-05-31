import {
    ApproveCertificationRequestHandler,
    CertificateBoundToCertificationRequestCommand,
    RevokeCertificationRequestHandler,
    ValidateCertificationRequestHandler
} from '@energyweb/issuer-api';

import { CreateCertificationRequestHandler } from './create-certification-request.handler';
import { GetCertificationRequestHandler } from './get-certification-request.handler';
import { GetAllCertificationRequestsHandler } from './get-all-certification-requests.handler';
import { GetCertificationRequestByCertificateHandler } from './get-certification-request-by-certificate.handler';

export {
    ApproveCertificationRequestHandler,
    CertificateBoundToCertificationRequestCommand,
    CreateCertificationRequestHandler,
    GetAllCertificationRequestsHandler,
    GetCertificationRequestHandler,
    GetCertificationRequestByCertificateHandler,
    RevokeCertificationRequestHandler,
    ValidateCertificationRequestHandler
};

export const Handlers = [
    ApproveCertificationRequestHandler,
    CertificateBoundToCertificationRequestCommand,
    CreateCertificationRequestHandler,
    GetAllCertificationRequestsHandler,
    GetCertificationRequestHandler,
    GetCertificationRequestByCertificateHandler,
    RevokeCertificationRequestHandler,
    ValidateCertificationRequestHandler
];