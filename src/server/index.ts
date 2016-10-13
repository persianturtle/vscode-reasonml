import { remote } from "../shared";
import * as feature from "./feature";
import * as request from "./request";
import { Session } from "./session";

const session = new Session();

// vscode features
session.connection.onInitialize(feature.initialize(session));
session.connection.onDocumentHighlight(feature.documentHighlight(session));
session.connection.onCodeLens(feature.codeLens(session));
session.connection.onCodeLensResolve(feature.codeLensResolve(session));
session.connection.onCompletion(feature.completion(session));
session.connection.onCompletionResolve(feature.completionResolve(session));
session.connection.onDefinition(feature.definition(session));
session.connection.onDocumentFormatting(feature.documentFormatting(session));
session.connection.onDocumentOnTypeFormatting(feature.documentOnTypeFormatting(session));
session.connection.onDocumentRangeFormatting(feature.documentRangeFormatting(session));
session.connection.onDocumentSymbol(feature.documentSymbol(session));
session.connection.onHover(feature.hover(session));
session.connection.onReferences(feature.references(session));
session.connection.onRenameRequest(feature.rename(session));

// vscode-reasonml features
session.connection.onRequest(remote.server.giveCaseAnalysis, request.giveCaseAnalysis(session));
session.connection.onRequest(remote.server.giveMerlinFiles, request.giveMerlinFiles(session));

session.listen();