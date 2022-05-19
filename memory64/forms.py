from django import forms



class SettingForm(forms.Form):
    size = forms.fields.ChoiceField(
      choices = (
        ('4', '4×4'),
        ('6', '6×6'),
        ('8', '8×8'),
      ),
      required=True,
      widget=forms.widgets.Select
    )
    time = forms.IntegerField(
      required=True,
      initial=0,
    )

    def clean_time(self):
      time = self.cleaned_data['time']
      if time < 0 or time > 101:
        raise forms.ValidationError('0~100の半角数字で指定してください')

      return time
