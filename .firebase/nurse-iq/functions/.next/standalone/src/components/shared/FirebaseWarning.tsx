
import { AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface FirebaseWarningProps {
  isApiKeyInvalid?: boolean;
  authConfigError?: string;
}

export function FirebaseWarning({ isApiKeyInvalid = false, authConfigError }: FirebaseWarningProps) {
  const title = isApiKeyInvalid ? "Firebase API Key Missing" : "Firebase Configuration Error";
  const primaryMessage = authConfigError 
    ? authConfigError 
    : "The application cannot connect to Firebase because the necessary API keys are missing.";

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Card className="w-full max-w-lg mx-4 border-destructive">
        <CardHeader className="text-center">
          <div className="mx-auto bg-destructive/10 rounded-full p-3 w-fit">
            <AlertTriangle className="h-10 w-10 text-destructive" />
          </div>
          <CardTitle className="text-destructive font-headline text-2xl mt-4">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-center text-muted-foreground">
            {primaryMessage}
          </p>
          <div className="p-4 bg-muted/50 rounded-lg text-sm space-y-2">
            <h3 className="font-semibold text-foreground">How to fix this:</h3>
            <ol className="list-decimal list-inside space-y-1">
              <li>
                Open your Firebase Project Console.
              </li>
              {isApiKeyInvalid ? (
                <>
                  <li>
                    Go to <span className="font-mono bg-muted px-1 py-0.5 rounded">Project Settings</span> &gt; <span className="font-mono bg-muted px-1 py-0.5 rounded">General</span>.
                  </li>
                  <li>
                    In the "Your apps" section, find your web app and select <span className="font-mono bg-muted px-1 py-0.5 rounded">Config</span> for the SDK setup.
                  </li>
                  <li>
                    Copy the configuration values (apiKey, authDomain, etc.).
                  </li>
                  <li>
                    Paste these values into the <code className="font-mono bg-muted px-1 py-0.5 rounded">.env</code> file in your project.
                  </li>
                </>
              ) : (
                 <>
                  <li>
                    Go to <span className="font-mono bg-muted px-1 py-0.5 rounded">Authentication</span> &gt; <span className="font-mono bg-muted px-1 py-0.5 rounded">Sign-in method</span>.
                  </li>
                  <li>
                    Ensure the providers you want to use (e.g., Email/Password, Google) are **Enabled**.
                  </li>
                 </>
              )}
            </ol>
          </div>
          <p className="text-center text-xs text-muted-foreground pt-2">
            After making changes, you may need to restart the development server.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
