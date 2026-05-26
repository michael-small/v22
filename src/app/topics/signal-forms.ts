import { Component, signal } from '@angular/core';
import { form, FormField, FormRoot, minLength, required, validate } from '@angular/forms/signals';

@Component({
  selector: 'app-signal-forms',
  imports: [FormField, FormRoot],
  template: `
    <p><a href="https://angular.dev/guide/forms/signals/overview" target="_blank">Docs</a></p>

    <p>
      There is a lot of resources available for signal forms out there, but the docs linked above
      are the most comprehensive. The following example was lifted from the docs, showing how
      validation can be implemented for a password + confirm password form. One standout thing I
      like is that the custom validator has proper typing, and have have a baked in message. And if
      the any of the pieces of the validation schema were wanted to be re-used, they could be
      <a
        href="https://angular.dev/guide/forms/signals/schemas#create-reusable-schemas-with-schema"
        target="_blank"
      >
        lifted into a schema function and re-used across multiple forms </a
      >.
    </p>

    <p>
      <em>
        The documentation is so nice that I have been using its principles in production projects
        with reactive forms for months now </em
      >. The
      <a href="https://angular.dev/guide/forms/signals/models" target="_blank">Form Models</a> and
      <a href="https://angular.dev/guide/forms/signals/model-design" target="_blank"
        >Form Model Design</a
      >
      parts of the signal forms docs have made for more maintainable reactive forms, and have even
      made some of the complex maddening reactive forms patterns I have dealt with much easier to
      manage.
    </p>

    <p>
      For a bunch of examples of different form scenarios, ranging from basic to slimmed down
      versions of complex topics, I have been experimenting for a couple months in my public
      <a href="https://github.com/michael-small/signal-forms-experimenting" target="_blank"
        ><code>signal-forms-experimenting</code></a
      >
      project. The project tries its best to follow documentation best practices, but also goes
      beyond the docs for scenarios not hashed out explicitly. There is even some bonus few examples
      using the SignalStore, but most of the examples use vanilla Angular signals and signal forms.
      It also uses Angular Material for some pieces, but the core principles can be applied to any
      UI library or even vanilla HTML forms, and there is plenty of vanilla HTML form examples as
      well.
    </p>

    <form [formRoot]="passwordForm">
      <label>
        New Password
        <input type="password" [formField]="passwordForm.password" />
      </label>
      <label>
        Confirm Password
        <input type="password" [formField]="passwordForm.confirmPassword" />
      </label>
      <button type="submit">Change Password</button>
    </form>
  `,
})
export class SignalForms {
  passwordModel = signal({
    password: '',
    confirmPassword: '',
  });
  passwordForm = form(this.passwordModel, (schemaPath) => {
    required(schemaPath.password, { message: 'Password is required' });
    minLength(schemaPath.password, 8, { message: 'Password must be at least 8 characters' });
    required(schemaPath.confirmPassword, { message: 'Please confirm your password' });
    validate(schemaPath.confirmPassword, ({ value, valueOf }) => {
      const confirmPassword = value();
      const password = valueOf(schemaPath.password);
      if (confirmPassword !== password) {
        return {
          kind: 'passwordMismatch',
          message: 'Passwords do not match',
        };
      }
      return null;
    });
  });
}
