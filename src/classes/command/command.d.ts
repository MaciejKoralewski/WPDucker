// Copyright 2023-2024 the WPDucker authors. All rights reserved. MIT license.

import { parseCliArgs } from '../../utils/parser/parser.ts';
import { classCommand } from './command.ts';

export type TCommandArgs = {
	commandArgs: ReturnType<typeof parseCliArgs>;
	documentation?: TCommandMeta['documentation'];
};

export type TCommandMeta = {
	phrase: string;
	documentation?: string;
	class: new (args: TCommandArgs) => classCommand;
};
