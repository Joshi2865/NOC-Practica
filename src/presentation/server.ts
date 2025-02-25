import { envs } from "../config/plugins/envs.plugin";
import { CheckService } from "../domain/use-cases/checks/check-service";
import { SendEmailLogs } from "../domain/use-cases/checks/email/send-email-logs";
import { FileSystemDatasource } from "../infrastructure/datasources/file-system.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron-service";
import { EmailService } from "./email/email.servic";

const fileSystemLogRepository = new LogRepositoryImpl(
	new FileSystemDatasource()
);

const emailService = new EmailService();

export class Server {
	public static start() {
		console.log("Server started...");

		//todo Mandar Email
		// new SendEmailLogs(emailService, fileSystemLogRepository).execute([
		// 	"tilinosanchez69@gmail.com",
		// ]);

		// emailService.sendEmailWithFileSystemLogs(["tilinosanchez69@gmail.com"]);

		// CronService.createJob("*/5 * * * * *", () => {
		// 	const url = "https://google.com";
		// 	new CheckService(
		// 		fileSystemLogRepository,
		// 		() => console.log(`${url} is ok`),
		// 		(error) => console.log(error)
		// 	).execute(url);
		// 	// new CheckService().execute( 'http://localhost:3000' );
		// });
	}
}
