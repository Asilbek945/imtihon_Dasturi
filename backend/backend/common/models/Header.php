<?php

namespace common\models;

use Yii;
olol
/**
 * This is the model class for table "header".
 *
 * @property int $id
 * @property string $nom
 */
class Header extends \yii\db\ActiveRecord
{


    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'header';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['id', 'nom'], 'required'],
            [['id'], 'integer'],
            [['nom'], 'string', 'max' => 100],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'nom' => 'Nom',
        ];
    }

}
